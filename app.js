require('dotenv').config()

const express = require('express')
const dbMysql = require('./middleware/database-middleware.js')
//databaseMiddleware
const authRouter = require('./routes/auth-route.js')
const recipeRouter = require('./routes/recipe-route.js')
const authMiddleware = require('./middleware/authentication-middleware.js')
const swaggerUi = require('swagger-ui-express');
const yaml = require('yaml')
const fs = require('fs')
const OpenApiValidator = require('express-openapi-validator');

const openApiPath = './doc/openapi.yaml'
const file = fs.readFileSync(openApiPath, 'utf8')
const swaggerDocument = yaml.parse(file)
const mysql = require("mysql2");

const app = express()

app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(OpenApiValidator.middleware({
    apiSpec: openApiPath,
    validateRequests: true,
  }))

// const mysqlCon = mysql.createConnection({
//   host: 'localhost',
//   port: 3306,
//   user: 'root',
//   password: 'RevoUmysql123',
//   database: 'revou'
// })

// mysqlCon.connect((err) => {
//   if (err) {
//     console.error("Database connection error: ", err);
//   } else {
//     console.log("Successfully connect to MySQL database !");
//   }
// })

app.use((req, res, next) => {
  req.dbMysql = dbMysql;
  next();
});

// app.use(databaseMiddleware)

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/auth', authRouter)
app.use('/recipe', authMiddleware, recipeRouter)

app.use((err, req, res, next) => {
    console.log(err, `<===== error =====`);
    res.status(err.status || 500).json({
      message: err.message,
      errors: err.errors
    })
  })

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
