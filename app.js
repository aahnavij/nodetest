const express = require('express');
const app = express();
const authRoute = require('./routes/studentForm');
const authSearchForm = require('./routes/searchForm');
app.set("view engine","ejs");
// const connection = require('./databse');

// app.use(bodyParser.urlencoded({ extended: true })); 

const port = process.env.PORT || 8000;

app.use(authRoute);
app.use(authSearchForm);
app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
});

