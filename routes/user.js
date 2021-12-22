const express = require('express');
const router = express();
const {connection} = require('../models/databse.js');
// const connection = require('./databse');
const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true })); 
var urlencodeParser = bodyParser.urlencoded({extended: false});
const {homePage,getForm,display,output} = require('../controllers/userController');
const {displayOutput,insertFormData} = require('../controllers/mainController')
router.set("view engine","ejs");
//get the form
router.get("/",homePage);
router.get("/form",getForm);
router.get("/display",display);
router.get("/output",output);


// databse code here
router.post("/form",urlencodeParser,insertFormData);
     
router.post('/output',urlencodeParser,displayOutput);

module.exports = router;