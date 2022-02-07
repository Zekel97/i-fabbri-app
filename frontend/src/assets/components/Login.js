import '../styles/Login.css';
import sha256 from 'crypto-js/sha256';
import { useNavigate } from 'react-router-dom';

var password = '';
var email = '';

const Login = () => {

    let navigate = useNavigate();

    function executeLogin(e) {
        e.preventDefault();
        
        var details = {
            'mail': email,
            'password': sha256(password).toString(),
        };

        var formBody = [];
        for (var property in details) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");


        fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: formBody
        }).then(res => res.json())
        .then(data => {            
            if(!data.auth) return new Error('Trouble auth');
            localStorage.setItem('i-fabbri-jwt', data.token);
            return navigate("../admin");
        })
    }   

    function getEmail(e) {
        e.preventDefault();
        email = e.target.value;
    }  
    
    function getPassword(e) {
        e.preventDefault();
        password = e.target.value;
    }   
    

    return (

        <div className="login">
            <h2>Login</h2>
            <div className="inputs">
                <div className="div-input">
                    <input
                        placeholder="Email"
                        className="input"
                        onChange={getEmail}
                        type="email"></input>
                </div>
                <div className="div-input">
                    <input
                        placeholder="Password"
                        className="input"
                        onChange={getPassword}
                        type="password"></input>
                </div>

                <button onClick={executeLogin}>Login</button>
            </div>
        </div>
    );
}
export default Login;