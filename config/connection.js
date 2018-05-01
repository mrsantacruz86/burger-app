const mysql = require('mysql');

const config = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "jesus1st",
  database: "burger_db"
}

var conn = mysql.createConnection(config);

conn.connect((err) => {
  if (err) {
    console.error(`Error connecting to MySQL: ${err.stack}`);
    return;
  }
  console.log(`Succesfully connected:  Thread id: ${conn.threadId}`);
});

module.exports = conn;