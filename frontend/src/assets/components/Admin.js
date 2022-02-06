import '../styles/Admin.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Admin() {

    const [industrialeImageArray, setIndustrialeArray] = useState([]);
    const [residenzialeImageArray, setResidenzialeArray] = useState([]);
    const [selectedIndFile, setIndustrialeFile] = useState(null);
    const [selectedResFile, setResidenzialeFile] = useState(null);
    const [refresh, setRefresh] = useState(false)
    
    useEffect(() => {
        retrieveImages()
    },[refresh]);

    const retrieveImages = () => {
        fetch('http://localhost:3000/api/upload/industriale', {
            method: 'GET',
        }).then(res => res.json())
        .then(data => {
            setIndustrialeArray(data);    
        });

        fetch('http://localhost:3000/api/upload/residenziale', {
            method: 'GET',
        }).then(res => res.json())
        .then(data => {
            setResidenzialeArray(data);
        });
    }
  
    const upload = (category) => () => {
        const data = new FormData();
        if (category === 'residenziale') {
            data.append('file', selectedResFile);
        } else {
            data.append('file', selectedIndFile);
        }
        axios.post("http://localhost:3000/api/upload/" + category, data)
            .then(res => { // then print response status
                setRefresh(!refresh)
            })
    }

    const remove = (id, category) => () => {
        axios.delete("http://localhost:3000/api/upload/" + category +"/"+id)
            .then(res => { // then print response status
                setRefresh(!refresh)
            })
            
    }

    return (
        <div className="admin">
            <div className="residenziale">
                <h1>Upload Residenziale</h1>

                <div className="inputManager">
                    <input
                        className='input-residenziale'
                        type="file"
                        onChange={(e) => setResidenzialeFile(e.target.files[0])}
                    />
                    <button className="residenziale" onClick={upload('residenziale')}>Upload</button>
                </div>  

                <div className="fileList">
                    
                    <ul className="imageList">
                    {
                        residenzialeImageArray.length > 0 &&
                        residenzialeImageArray.map((el, key) => {
                            const url = `http://localhost:3000/residenziale/${el}`;
                            return (
                            <li key={key}>
                                <img src={url} alt="" style={{width: "2em", height:"2em"}}/>
                                <button onClick={remove(el, 'residenziale')}>X</button>
                                </li>
                            );
                        })
                    }
                    {
                        residenzialeImageArray.length <= 0 &&
                        <div>NOTHING</div>
                    }
                    </ul>
                </div>
            </div>

            <div className="industriale">
                <h1>Upload Industriale</h1>
                <div className="inputManager">
                    <input
                        className='input-industriale'
                        type="file"
                        onChange={(e) =>setIndustrialeFile(e.target.files[0])}
                    />
                    <button className="industriale" onClick={upload('industriale')}>Upload</button>
                </div>

                <div className="fileList">
                    <ul className="imageList">
                    {
                        industrialeImageArray.length > 0 &&
                        industrialeImageArray.map((el, key) => {
                            const url = `http://localhost:3000/industriale/${el}`;
                            return (
                            <li key={key}>
                                <img src={url} alt="" style={{width: "2em", height:"2em"}}/>
                                <button onClick={remove(el, 'industriale')}>X</button>
                                </li>
                            );
                    })
                    }
                    {
                        industrialeImageArray.length <= 0 &&
                        <div>NOTHING</div>
                    }
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Admin;