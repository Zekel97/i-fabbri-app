import '../styles/Login.css';

var password = '';
var email = '';


function Login() {
    
    function executeLogin(e) {
        e.preventDefault();
        
        var details = {
            'mail': email,
            'password': password,
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
        }).then(res => {
            console.log(res.json());
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