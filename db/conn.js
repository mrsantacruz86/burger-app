const mysql = require('mysql');

var config = {
  host: "localhost",
  port: 3306,
  user: 'root',
  password: 'jesus1st',
  database: 'burger_db'
}

var conn =  mysql.createConnection(config, (err) =>{
  if (err) throw err;
  console.log(`Connectec to MySQL on: ${config.host}:${config.port}. Thread: ${conn.threadId}`);
});

// conn.connect();

module.exports(conn);
