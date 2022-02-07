const express = require('express');
const multer = require('multer');
const router = express.Router();
const industrialeController = require('../controllers/indController.js');
const residenzialeController = require('../controllers/resController.js');

const storageRes = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, 'uploads/residenziale')
    },
    filename: (req, file, callBack) => {
        callBack(null, file.originalname)
    }
  });

const storageInd = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, 'uploads/industriale')
    },
    filename: (req, file, callBack) => {
        callBack(null, file.originalname)
    }
});

const resUpload = multer({ storage: storageRes });
const indUpload = multer({ storage: storageInd });


router
    .route("/industriale")
    .get(industrialeController.retrieve)
    .post(indUpload.single('file'), industrialeController.upload);
router
    .route("/industriale/:id")
    .delete(industrialeController.remove);

router
    .route("/residenziale")
    .get(residenzialeController.retrieve)
    .post(resUpload.single('file'), residenzialeController.upload);

    router
    .route("/residenziale/:id")
    .delete(residenzialeController.remove);

module.exports = router;