const express = require('express');
const studentRouter = express();
const {connection} = require('../models/databse.js');
// const connection = require('./databse');
const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true })); 
var urlencodeParser = bodyParser.urlencoded({extended: false});
// router.set("view engine","ejs");
const {homePage,getForm,display,output} = require('../controllers/userController');
const {displayOutput,insertFormData} = require('../controllers/mainController')
studentRouter.get("/",homePage);
studentRouter.get("/form",getForm);
studentRouter.post("/form",urlencodeParser,insertFormData);

module.exports = studentRouter;