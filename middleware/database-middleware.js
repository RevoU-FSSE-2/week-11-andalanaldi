const mysql = require("mysql2");

const mysqlCon = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'RevoUmysql123',
    database: 'recippedia'
})

mysqlCon.connect((err) => {
    if (err) {
        console.error("Database connection error: ", err);
    } else {
        console.log("Successfully connect to MySQL database !");
    }
})

module.exports = mysqlCon;
