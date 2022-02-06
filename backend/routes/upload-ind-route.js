const express = require('express');
const multer = require('multer');
const industrialeController = require('../controllers/indController.js');
const router = express.Router();

const storageInd = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, 'uploads/industriale')
    },
    filename: (req, file, callBack) => {
        callBack(null, file.originalname)
    }
})

const indUpload = multer({ storage: storageInd });

router
    .route("/")
    .get(industrialeController.retrieve)
    .post(indUpload.single('file'), industrialeController.upload);
router
    .route("/:id")
    .delete(industrialeController.remove);

module.exports = router;