import '../styles/Login.css';

var password = '';


function Login() {
    
    function executeLogin(e) {
        e.preventDefault();
        console.log(password);
    }   

    function getPassword(e) {
        e.preventDefault();
        password = e.target.value;
    }   

    
    return(
        <div className="login">
            <h2>Login</h2>
            <div className="inputs">
                <input onChange={getPassword} type="password"></input>
                <button onClick={executeLogin}>Login</button>
            </div>
        </div>
    );
}
export default Login;