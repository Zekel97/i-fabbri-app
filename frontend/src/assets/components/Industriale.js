import '../styles/Industriale.css';
import {useEffect, useState} from 'react';

function Industriale() {
    const [imageArray, setImageArray] = useState([]);

    useEffect(() => {
        retrieveImages()
    },[]);
    
    const retrieveImages = () => {
        fetch('http://localhost:3000/api/upload/industriale', {
            method: 'GET',
        }).then(res => res.json())
        .then(data => {
            setImageArray(data);
        })
    }

    return(
        <div className="industriale">
            <div className="title">
                <h1>INDUSTRIALE</h1>
            </div>

            <div className="photo-grid">
            {
                    imageArray.length >0 &&
                    imageArray.map((el, key) => {
                        const url = `http://localhost:3000/industriale/${el}`;
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

export default Industriale;