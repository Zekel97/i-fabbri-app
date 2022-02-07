import '../styles/Residenziale.css';
import axios from 'axios';
import {useEffect, useState} from 'react';

function Residenziale() {
    const [imageArray, setImageArray] = useState([]);

    useEffect(() => {
        retrieveImages()
    },[]);
    
    const retrieveImages = () => {
        axios.get('http://localhost:3000/api/category/residenziale')
            .then(res => {
                setImageArray(res.data);
            })
    }

    return(
        <div className="residenziale">
            <div className="title">
                <h1>RESIDENZIALE</h1>
            </div>

            <div className="photo-grid">
                {
                    imageArray.length >0 &&
                    imageArray.map((el, key) => {
                        const url = `http://localhost:3000/residenziale/${el}`;
                        return(<img key={key} src={url} alt="" />);
                    })
                }
                {
                    imageArray.length <= 0 && 
                    <div>NOTHING</div>
                }
            </div>
        </div>
    );
}

export default Residenziale;