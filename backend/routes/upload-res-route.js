const express = require('express');
const multer = require('multer');

const storageRes = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, 'uploads/residenziale')
    },
    filename: (req, file, callBack) => {
        callBack(null, file.originalname)
    }
  })

let resUpload = multer({ storage: storageRes });

const residenzialeController = require('../controllers/resController.js');

const router = express.Router();

router
    .route("/")
    .get(residenzialeController.retrieve)
    .post(resUpload.single('file'), residenzialeController.upload);

module.exports = router;