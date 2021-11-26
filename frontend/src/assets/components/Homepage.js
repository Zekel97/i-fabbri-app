import { Link } from "react-router-dom";
import '../styles/Homepage.css';

function Homepage() {
    return(
        <div class="circle">
            <div class="circle-left">
                <h2 class="text">
                    <Link to="/residenziale">Residenziale</Link>
                </h2>
           
            </div> 
            <div class="circle-right">
                <h2 class="text">
                    Industriale
                </h2> 
            </div>

        </div>

    );
}
export default Homepage;