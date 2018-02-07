const createRoute = require('express').Router();

createRoute.get('/create', (req, res) => {
  res.render('create');
});

module.exports = createRoute;