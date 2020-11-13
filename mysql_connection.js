const mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "demeter",
  multipleStatements: true
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected to Demeter!");
});

module.exports = connection;