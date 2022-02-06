const fs = { ...require('fs').promises };

const path = require('path');
const catchAsync = require("../utils/catchAsync");

exports.upload = catchAsync(async (req, res, next) => {
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
        const files = await fs.readdir('./uploads/residenziale');
        res.status(200).json(files);
    } catch (err) {
        res.status(500).json(err);
    }
})

exports.remove = catchAsync(async (req, res, next) => {
    fs.unlink('./uploads/residenziale/'+req.params.id, function (err) {
        if(err) throw err;
    })
})