const mysql = require("mysql2");

const mysqlCon = mysql.createConnection({
    // host: 'localhost',
    host: 'fdaa:2:c0b9:a7b:12a:b50d:532d:2',
    // port: 3306,
    user: 'root',
    // password: 'RevoUmysql123',
    password: 'password',
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
