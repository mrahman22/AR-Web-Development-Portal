const mysql = require("mysql");


const db = mysql.createConnection({
    host: "localhost",
    user: "Mustabur",
    password: "LondonBus@23",
    database: "ar_staff",
  });

module.exports = db;