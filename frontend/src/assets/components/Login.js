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
            <input onChange={getPassword} type="password"></input>
            <button onClick={executeLogin}></button>
        </div>
    );
}
export default Login;