import { Link } from "react-router-dom";
import '../styles/Homepage.css';

function Homepage() {
    return(
        <div className="circle">
            <div className="circle-left">
                <h2 className="text">
                    <Link to="/residenziale">Residenziale</Link>
                </h2>
            </div> 
            <div className="circle-right">
                <h2 className="text">
                <Link to="/industriale">Industriale</Link>
                </h2> 
            </div>
        </div>

    );
}
export default Homepage;