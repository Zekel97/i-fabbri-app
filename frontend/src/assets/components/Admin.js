//import '../styles/Admin.css';


function Admin() {
    let image;
    function upload() {
        fetch('http://localhost:3000/api/upload/residenziale',{
            method: 'POST',
            body: image,
        }).then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    function onImageChange(event) {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            image = URL.createObjectURL(img);
            console.log(image);
          }
    }
    return(
        <div className="admin">
            <h1>Upload Image</h1>
            <form onSubmit={upload} enctype="multipart/form-data">
                <input type="file" name="myImage" accept="image/*" onChange={onImageChange} />
                <input type="submit" value="Upload Photo"/>
            </form>
        </div>
    );
};
export default Admin;