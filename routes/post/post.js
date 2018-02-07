const postRoute = require('express').Router();
const database    = require('../../models/database');
const zaqvki      = require('../../models/zaqvki');

postRoute.post('/create', (req, res) => {
  let records = [[req.body.inn, req.body.dose]];
  database.query(zaqvki.create, [records], (err, result, fields) => {
    if(err) throw err;
    console.log(result);
  });
  res.redirect('/');
});

module.exports = postRoute;