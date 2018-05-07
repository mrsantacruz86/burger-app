const mysql = require('mysql');

var config;
if(process.env.JAWSDB_URL){
  // Production Database Configuration
  config = process.env.JAWSDB_URL;
} else{
  // Develoment Database Configuration
  const config = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "jesus1st",
    database: "burger_db"
  }
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