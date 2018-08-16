// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, res){
      cb(res);
    });
  },
  insertOne: function(table, objCol, objData, cb) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(queryString, [table, objCol, objData], function(err, res) {
      cb(res);
    });
  },
  updateOne: function(table, objCol, objData, conditionCol, conditionData, cb) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    connection.query(queryString, [table, objCol, objData, conditionCol, conditionData], function(err, res) {
      cb(res);
    });
  }
}; 

module.export = orm;
