const dotenv = require('dotenv');

dotenv.config();

// GitHub OAuth
exports.clientID = process.env.CLIENT_ID;
exports.clientSecret = process.env.CLIENT_SECRET;
exports.clinetURL = process.env.CLIENT_URL;

// Database
exports.host = process.env.DB_HOST;
exports.user = process.env.DB_USER;
exports.database = process.env.DB_NAME;
exports.password = process.env.DB_PASS;
