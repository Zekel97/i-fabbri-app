const fs = require("fs");
//const multer = require("multer");
const path = require('path');

const catchAsync = require("../utils/catchAsync");
/*
app.post("/uploadphoto",upload.single('myImage'),(req,res)=>{
    var img = fs.readFileSync(req.file.path);
    var encode_img = img.toString('base64');
    var final_img = {
        contentType:req.file.mimetype,
        image:new Buffer(encode_img,'base64')
    };
    imageModel.create(final_img,function(err,result){
        if(err){
            console.log(err);
        }else{
            console.log(result.img.Buffer);
            console.log("Saved To database");
            res.contentType(final_img.contentType);
            res.send(final_img.image);
        }
    })
})
*/
exports.upload = catchAsync(async (req, res, next) => {
    //const img = fs.readFileSync(req.file.path);
    console.log(res.body);
    return res.status(200);
})