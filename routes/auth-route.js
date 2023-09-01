// auth-route.js
const { Router } = require('express');
const { register, login } = require('../service/auth-service.js');
const authenticationMiddleware = require('../middleware/authentication-middleware.js');
const { body } = require('express-validator'); // Import express-validator's body function

const authRouter = Router();

authRouter.post(
    '/register',
    [
        // Add validation middleware here for the 'register' route
        body('username').isEmail().withMessage('Invalid email format'),
        body('password')
            .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
            .matches(/^(?=.*\d)(?=.*[a-zA-Z]).+$/).withMessage('Password must contain both letters and numbers'),
        body('role').isIn(['user', 'publisher']).withMessage('Role must be "user" or "publisher"'),
    ],
    register
);

authRouter.post('/login', login);

module.exports = authRouter;
