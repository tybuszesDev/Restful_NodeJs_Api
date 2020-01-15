const express = require('express');

const app = express();

// express giving us the ability the ability to create routes in simple way

//Middlewares we can use it for example to make some autentification
app.use('/posts', () => {
    console.log('This is a middleware running')
})

//ROUTES
app.get('/', (req,res) => {
    res.send('We are on home');

});

app.get('/posts', (req,res) => {
    res.send('We are on posts');

});


//How to start listening the server
app.listen(3000);
