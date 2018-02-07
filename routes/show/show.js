const showRoute = require('express').Router();
const database  = require('../../models/database');
const zaqvki    = require('../../models/zaqvki');

showRoute.get('/:id', (req, res) => {
  let id = req.params.id;
  database.query(zaqvki.selectOne, id, (err, item) => {
    if(err)throw err;
    res.render('show', {item});  
  });
});

module.exports = showRoute;