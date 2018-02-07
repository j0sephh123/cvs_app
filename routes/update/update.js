updateRoute = require('express').Router();
const database = require('../../models/database');
const zaqvki   = require('../../models/zaqvki');

updateRoute.put('/:id', (req, res) => {
  let ws = req.body.item;
  let params = [ws.inn, ws.dose, req.params.id];
  database.query(zaqvki.updateItem, params, (err, updatedItem) => {
    if(err)throw err;
    res.redirect('/'+req.params.id);
  });
});

module.exports = updateRoute;