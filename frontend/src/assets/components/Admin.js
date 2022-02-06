import '../styles/Admin.css';
import axios from 'axios';
import { useState } from 'react';

function Admin() {

    const [state, setState] = useState(
        {
            selectedIndFile: null,
            selectedResFile: null
        }
    )

    const upload = (category) => () => {
        const data = new FormData();
        if (category === 'residenziale') {
            data.append('file', state.selectedResFile);
        } else {
            data.append('file', state.selectedIndFile);
        }
        axios.post("http://localhost:3000/api/upload/" + category, data)
            .then(res => { // then print response status
                console.log(res.statusText)
            })
    }

    const remove = (id, category) => () => {
        axios.delete("http://localhost:3000/api/upload/" + category +"/"+id)
            .then(res => { // then print response status
                console.log(res.statusText)
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
                        onChange={(e) =>
                            setState({
                                ...state,
                                selectedResFile: e.target.files[0],
                            })
                        }
                    />
                    <button className="residenziale" onClick={upload('residenziale')}>Upload</button>
                </div>

                <div className="fileList">
                    <button onClick={remove('laptop.jpg', 'industriale')}></button>
                    {
                        //TODO: Insert file list to delete
                    }
                </div>
            </div>

            <div className="industriale">
                <h1>Upload Industriale</h1>
                <div className="inputManager">
                    <input
                        className='input-industriale'
                        type="file"
                        onChange={(e) =>
                            setState({
                                ...state,
                                selectedIndFile: e.target.files[0],
                            })}
                    />
                    <button className="industriale" onClick={upload('industriale')}>Upload</button>
                </div>

                <div className="fileList">
                    {
                        //TODO: Insert file list to delete
                        /*
                        ul
                            li
                        ul
                        */
                    }
                </div>
            </div>
        </div>
    );
};
export default Admin;