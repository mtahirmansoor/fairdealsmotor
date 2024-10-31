const jwt = require('jsonwebtoken');

// JWT Authentication Middleware
function auth(req, res, next) {
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).send('Access denied. No token provided.');
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret', (err, decoded) => {
        if (err) {
            return res.status(403).send('Invalid or expired token.');
        }
        req.user = decoded; // Attach the decoded token data to request object
        next(); // Continue to the next middleware or route handler
    });
}

module.exports = auth;
