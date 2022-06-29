const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
  console.log('heref');
  //res.render('index', { title: 'Home' });
});

module.exports = route;
