//import '../styles/Admin.css';
import axios from 'axios';

function Admin() {

    function upload(event) {
        const data = new FormData() ;
        data.append('file', event.target.files[0]);
        axios.post("http://localhost:3000/api/upload/"+event.target.className, data)
            .then(res => { // then print response status
             console.log(res.statusText)
        })
    }
    
    return(
        <div className="admin">
            <div className="residenziale"> 
            <h1>Upload Residenziale</h1>
            <input type="file" className="residenziale" onChange={upload} />
            </div>

            <div className="industriale"> 
            <h1>Upload Industriale</h1>
            <input type="file" className="industriale" onChange={upload} />
            </div>
        </div>
    );
};
export default Admin;