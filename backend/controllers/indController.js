const promises = { ...require('fs').promises };
const fs = require('fs');

const catchAsync = require("../utils/catchAsync");

exports.upload = catchAsync(async (req, res, next) => {
    console.log(req.file);
    const file = req.file;
    if (!file) {
      const error = new Error('No File')
      error.httpStatusCode = 400
      return next(error)
    }
    res.send(file);
})

exports.retrieve = catchAsync(async (req, res, next) => {
    try {
        const files = await promises.readdir('./uploads/industriale');
        res.status(200).json(files);
    } catch (err) {
        res.status(500).json(err);
    }
})

exports.remove = catchAsync(async (req, res, next) => {    
    fs.unlink('./uploads/industriale/'+req.params.id, function (err) {
        if(err) res.status(500).json(err);
    })
    res.status(200).json({status: 'OK'});    
})