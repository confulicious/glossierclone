const express = require('express');
const app = express(); 
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser'); 
require('dotenv/config');


//middleware
app.use(bodyParser.json())

// import routes
const productRoute = require('./routes/productroutes'); 

app.use('/products', productRoute); 

//Connect to database 
mongoose.set('useUnifiedTopology', true);
mongoose.connect(
    process.env.DB_CONNECTION, { useNewUrlParser: true }, 
    () => console.log('we are in the database')
)

//server 
app.listen(5000); 
