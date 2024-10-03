const jwt = require('jsonwebtoken');

const adminAuth = (req, res, next) => {
    try {
        // Fetch the token from the Authorization header
        const authHeader = req.headers.authorization;

        // Check if Authorization header exists and has the correct format
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ success: false, message: "Not authorized, token missing or invalid" });
        }

        // Extract token from the header (removing 'Bearer ' prefix)
        const token = authHeader.split(' ')[1];

        // Verify the token
        const token_decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        // Check if the decoded token matches the admin credentials
        if (token_decoded.id !== process.env.ADMIN_ID) {
            return res.status(403).json({ success: false, message: "Not authorized, invalid admin credentials" });
        }

        // Token is valid and matches admin credentials, proceed to next middleware
        next();
    } catch (error) {
        // Differentiate token errors from server errors
        if (error.name === 'TokenExpiredError' || error.name === 'JsonWebTokenError') {
            return res.status(401).json({ success: false, message: "Invalid or expired token" });
        }
        return res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};

module.exports = { adminAuth };
