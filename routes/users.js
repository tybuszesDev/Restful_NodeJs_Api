const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
    res.send('User Place');

});

router.get('/superuser', (req,res) => {
    res.send('Superuser Place');

});

module.exports = router;