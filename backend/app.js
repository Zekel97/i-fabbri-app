const express = require('express');
const bp = require('body-parser')

const app = express();
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }));

module.exports = app;