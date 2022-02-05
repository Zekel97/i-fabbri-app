const express = require('express');
const multer = require('multer');

const storageInd = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, 'uploads/industriale')
    },
    filename: (req, file, callBack) => {
        callBack(null, file.originalname)
    }
})

let indUpload = multer({ storage: storageInd });

const industrialeController = require('../controllers/indController.js');

const router = express.Router();

router
    .route("/")
    .get(industrialeController.retrieve)
    .post(indUpload.single('file'), industrialeController.upload);

module.exports = router;