const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');



const app = express(); // express giving us the ability the ability to create routes in simple way

//Import Routes Middleware

const postsRoute = require('./routes/posts')
const usersRoute = require('./routes/users')

app.use(cors());
app.use(bodyParser.json()); // middleware to parse the json format using bodyparser library
app.use('/posts', postsRoute);
app.use('/users', usersRoute);

//Middlewares, we can use it for example to make some autentification
//app.use('/posts', () => {
//    console.log('This is a middleware running')
//})

//ROUTES
app.get('/', (req,res) => {
    res.send('We are on home');

});


//Connect to DB
mongoose.connect( process.env.DB_CONNECTION,
{ useUnifiedTopology: true , 
 useNewUrlParser: true,
 useCreateIndex: true },
  () => console.log('connected to DB!')
 );

//How to start listening the server
app.listen(3000);
