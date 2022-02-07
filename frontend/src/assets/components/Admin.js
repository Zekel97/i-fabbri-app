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
    }, [refresh]);

    const retrieveImages = () => {
        fetch('http://localhost:3000/api/category/industriale', {
            method: 'GET',
        }).then(res => res.json())
            .then(data => {
                setIndustrialeArray(data);
            });

        fetch('http://localhost:3000/api/category/residenziale', {
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
        axios.post("http://localhost:3000/api/category/" + category, data)
            .then(res => {
                setRefresh(!refresh)
            })
    }

    const remove = (id, category) => () => {
        axios.delete("http://localhost:3000/api/category/" + category + "/" + id)
            .then(res => { 
                setRefresh(!refresh)
            })

    }

    return (
        <div className="admin">
            <div className="admin-residenziale">
                <h2>Upload Residenziale</h2>

                <div className="inputManager">
                    <input
                        className='input-residenziale'
                        type="file"
                        onChange={(e) => setResidenzialeFile(e.target.files[0])}
                    />
                    <button onClick={upload('residenziale')}>Upload</button>
                </div>

                <div className="fileList">

                    <ul className="imageList">
                        {
                            residenzialeImageArray.length > 0 &&
                            residenzialeImageArray.map((el, key) => {
                                const url = `http://localhost:3000/residenziale/${el}`;
                                return (
                                    <li key={key}>
                                        <img src={url} alt="" />
                                        <button onClick={remove(el, 'residenziale')}>X</button>
                                    </li>
                                );
                            })
                        }
                    </ul>
                    {
                        residenzialeImageArray.length <= 0 &&
                        <div>NOTHING</div>
                    }

                </div>
            </div>

            <div className="admin-industriale">
                <h2>Upload Industriale</h2>
                <div className="inputManager">
                    <input
                        className='input-industriale'
                        type="file"
                        onChange={(e) => setIndustrialeFile(e.target.files[0])}
                    />
                    <button onClick={upload('industriale')}>Upload</button>
                </div>

                <div className="fileList">
                    <ul className="imageList">
                        {
                            industrialeImageArray.length > 0 &&
                            industrialeImageArray.map((el, key) => {
                                const url = `http://localhost:3000/industriale/${el}`;
                                return (
                                    <li key={key}>
                                        <img src={url} alt="" />
                                        <button onClick={remove(el, 'industriale')}>X</button>
                                    </li>
                                );
                            })
                        }
                    </ul>
                    {
                        industrialeImageArray.length <= 0 &&
                        <div>NOTHING</div>
                    }

                </div>
            </div>
        </div>
    );
};
export default Admin;