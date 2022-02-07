import '../styles/Residenziale.css';
import {useEffect, useState} from 'react';

function Residenziale() {
    const [imageArray, setImageArray] = useState([]);

    useEffect(() => {
        retrieveImages()
    },[]);
    
    const retrieveImages = () => {
        fetch('http://localhost:3000/api/category/residenziale/', {
            method: 'GET',
        }).then(res => res.json())
        .then(data => {
            setImageArray(data);
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