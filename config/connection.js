const mysql = require('mysql');
// Develoment Database Configuration
// const config = {
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "jesus1st",
//   database: "burger_db"
// }
// Production Database Configuration
const config = {
  host: "	vvfv20el7sb2enn3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "olly9azms36yofzh",
  password: "s4h5v2vi74j5qzx6",
  database: "o51nyftn4vs2ahtf"
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