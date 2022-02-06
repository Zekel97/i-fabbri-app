const promises = { ...require('fs').promises };
const fs = require('fs');

const path = require('path');
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
    console.log(req.params.id);
    const filePath = path.join(__dirname, '/uploads/industriale/'+req.params.id);
    
    fs.unlink(filePath, function (err) {
        if(err) throw err;
        console.log('deleted');
    })

})