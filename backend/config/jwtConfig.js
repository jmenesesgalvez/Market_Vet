const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET || 'default_secret_key';

const generateToken = (payload) => jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
const verifyToken = (token) => jwt.verify(token, SECRET_KEY);

module.exports = { generateToken, verifyToken };

//Este archivo configura la firma y verificación del JWT para autenticación.

