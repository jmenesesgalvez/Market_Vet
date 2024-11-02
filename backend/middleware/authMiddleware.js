const jwt = require('jsonwebtoken');

exports.authenticateToken = (req, res, next) => {
    // Lógica para autenticación
    const { verifyToken } = require('../config/jwtConfig');

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ error: 'Acceso denegado' });

    try {
        const decoded = verifyToken(token.split(' ')[1]);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(403).json({ error: 'Token no válido' });
    }
};

module.exports = authMiddleware;
};
