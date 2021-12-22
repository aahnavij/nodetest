const express = require('express');
const app = express();
const authRoute = require('./routes/user');
// const connection = require('./databse');

// app.use(bodyParser.urlencoded({ extended: true })); 

const port = process.env.PORT || 8000;

app.use(authRoute);
app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
});

