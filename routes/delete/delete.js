deleteRoute = require('express').Router();
const database = require('../../models/database');
const zaqvki   = require('../../models/zaqvki');

deleteRoute.delete('/:id', (req, res) => {
  let id = req.params.id;
  database.query(zaqvki.deleteItem, id, (err) => {
    res.redirect('/');
  });
});

module.exports = deleteRoute;