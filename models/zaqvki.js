const zaqvki = {
  selectAll : "SELECT * FROM alldrugs",
  selectOne : "SELECT * FROM alldrugs WHERE id=?",
  create : "INSERT INTO alldrugs (inn, dose) VALUES ?",
  updateItem : "UPDATE alldrugs SET inn=?, dose=? WHERE id=?",
  deleteItem : "DELETE FROM alldrugs WHERE id=?"
}

module.exports = zaqvki;