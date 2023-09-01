const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { JWT_SIGN } = require('../config/jwt.js')

// auth-service.js
const register = async (req, res) => {
    const { username, password, role } = req.body;

    try {
        if (!['User', 'Publisher'].includes(role)) {
            throw new Error('Role must be "User" or "Publisher"');
        }
        if (!username.trim()) {
            throw new Error('Username cannot be blank');
        }
        if (password.length < 8 || !/^(?=.*\d)(?=.*[a-zA-Z]).+$/.test(password)) {
            throw new Error('Password must be at least 8 characters and contain both letters and numbers');
        }

        const user = await req.dbMysql.query('SELECT * FROM recippedia.user WHERE username = ?', [username]);

        if (user.length > 0) {
            throw new Error('Username already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await req.dbMysql.query('INSERT INTO recippedia.user (username, password_hash, role) VALUES (?, ?, ?)', [username, hashedPassword, role]);
        res.status(200).json({
            message: 'User successfully registered',
            data: newUser,
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



const login = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await query("SELECT * FROM recippedia.user WHERE username = ?", [username]);
  
      if (!user || user.length === 0) {
        res.status(401).json({ error: 'Username not found' });
        return;
      }
  
      const isPasswordCorrect = await bcrypt.compare(password, user[0].password);
  
      if (isPasswordCorrect) {
        const token = jwt.sign({ username: user[0].username, id: user[0].user_id, role: user[0].role }, JWT_SIGN);
        res.status(200).json({
          message: 'User successfully logged in',
          data: token,
        });
      } else {
        res.status(401).json({ error: 'Password is incorrect' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
module.exports = {
    register,
    login
}