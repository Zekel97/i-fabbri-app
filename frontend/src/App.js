import {
    Routes,
    Route,
} from "react-router-dom";
import PrivateRoute from './assets/components/PrivateRoute'
import Homepage from './assets/components/Homepage';
import Login from './assets/components/Login';
import Residenziale from './assets/components/Residenziale';
import Industriale from './assets/components/Industriale';
import Contatti from './assets/components/Contatti';
import Admin from './assets/components/Admin';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/residenziale" element={<Residenziale />} />
            <Route path="/industriale" element={<Industriale />} />
            <Route path="/contatti" element={<Contatti />} />

            <Route path="/login" element={<Login />} />

            <Route element={<PrivateRoute />}>
                <Route path="/admin" element={<Admin />} />
            </Route>
        </Routes>
    );
}


export default App;