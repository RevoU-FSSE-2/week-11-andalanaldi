const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SIGN } = require('../config/jwt.js');

// auth-service.js
const register = async (req, res) => {
    const { username, password, role } = req.body;

    try {
        if (!['user', 'publisher'].includes(role)) {
            throw new Error('Role must be "user" or "publisher"');
        }
        if (!username.trim()) {
            throw new Error('Username cannot be blank');
        }
        if (password.length < 8 || !/^(?=.*\d)(?=.*[a-zA-Z]).+$/.test(password)) {
            throw new Error('Password must be at least 8 characters and contain both letters and numbers');
        }

        req.dbMysql.query(
            'SELECT * FROM recippedia.user WHERE username = ?',
            [username],
            (err, result) => {
                if (err) {
                    res.status(500).json({ error: err.message });
                    return;
                }

                if (result.length > 0) {
                    res.status(400).json({ error: "Username already exists" });
                    return;
                }

                const hashedPassword = bcrypt.hashSync(password, 10);

                req.dbMysql.query(
                    'INSERT INTO recippedia.user (username, password_hash, role) VALUES (?, ?, ?)',
                    [username, hashedPassword, role],
                    (err, newUser) => {
                        if (err) {
                            res.status(500).json({ error: err.message });
                            return;
                        }

                        res.status(200).json({
                            message: 'User successfully registered',
                            data: newUser,
                        });
                    }
                );
            }
        );
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        req.dbMysql.query(
            "SELECT * FROM recippedia.user WHERE username = ?",
            [username],
            (err, users) => {
                if (err) {
                    res.status(500).json({ error: err.message });
                    return;
                }

                if (!users || users.length === 0) {
                    res.status(401).json({ error: 'Username not found' });
                    return;
                }

                const user = users[0];

                bcrypt.compare(password, user.password_hash, 
                    (err, isPasswordCorrect) => {
                    if (err) {
                        res.status(500).json({ error: err.message });
                        return;
                    }

                    if (isPasswordCorrect) {
                        const token = jwt.sign(
                            { username: user.username, id: user.user_id, role: user.role },
                            JWT_SIGN
                        );

                        res.status(200).json({
                            message: 'User successfully logged in',
                            data: token,
                        });
                    } else {
                        res.status(401).json({ error: 'Password is incorrect' });
                    }
                });
            }
        );
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    register,
    login,
};
