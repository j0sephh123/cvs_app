const editRoute = require('express').Router();
const database  = require('../../models/database');
const zaqvki    = require('../../models/zaqvki');

editRoute.get('/:id/edit', (req, res) => {
  let id = req.params.id;
  database.query(zaqvki.selectOne, id, (err, item) => {
    if (err) throw err;
    res.render('edit', {item});
  });
});

module.exports = editRoute;