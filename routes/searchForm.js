const express = require('express');
const searchRouter = express.Router();
const {connection} = require('../models/databse.js');
// const connection = require('./databse');
const bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({extended: false});
const {homePage,getForm,display,output} = require('../controllers/userController');
const {displayOutput,insertFormData} = require('../controllers/mainController');
searchRouter.get("/display",display);
searchRouter.get("/output",output);
searchRouter.post('/output',urlencodeParser,displayOutput);

module.exports = searchRouter;