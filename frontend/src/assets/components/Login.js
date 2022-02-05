import '../styles/Login.css';
import sha256 from 'crypto-js/sha256';
import { useNavigate } from 'react-router-dom';

var password = '';
var email = '';


function Login() {
    let navigate = useNavigate();

    function executeLogin(e) {
        e.preventDefault();
        
        var details = {
            'mail': sha256(email).toString(),
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
            console.log(data);
            if(data.auth)
            {
                console.log('INSIDE AUTH');
                localStorage.setItem('i-fabbri-jwt', data.token);
                navigate('/admin');
            }
            // TODO: handle this
            return new Error('Trouble auth');
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
    
    return(
        <div className="login">
            <h2>Login</h2>
            <div className="inputs">
                <input onChange={getEmail} type="email"></input>
                <input onChange={getPassword} type="password"></input>
                <button onClick={executeLogin}>Login</button>
            </div>
        </div>
    );
}
export default Login;