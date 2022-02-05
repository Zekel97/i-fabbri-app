const express = require('express');

//const loginController = require('../controllers/loginController.js');
const industrialeController = require('../controllers/indController.js');
const residenzialeController = require('../controllers/resController.js');

const router = express.Router();
/*
router
    .route("/industriale")
    .get(industrialeController.retrieve)
    .post(industrialeController.upload);

   */ 
router
    .route("/residenziale")
    //.get(residenzialeController.retrieve)
    .post(residenzialeController.upload);

module.exports = router;