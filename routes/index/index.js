const indexRoute = require('express').Router();
const database   = require('../../models/database');
const zaqvki     = require('../../models/zaqvki');

indexRoute.get('/', (req, res) => {
  database.query('SELECT * FROM alldrugs', (err, result, fields) => {
    if (err) throw err;
    console.log(result);
    res.render('index', {result});
  });
});

module.exports = indexRoute;




























































































