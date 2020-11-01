const dotenv = require('dotenv');

dotenv.config();

exports.clientID = process.env.CLIENT_ID;
exports.clientSecret = process.env.CLIENT_SECRET;
exports.clinetURL = process.env.CLIENT_URL;