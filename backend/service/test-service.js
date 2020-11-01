const users = require('../model/users');

exports.userService = async() => {
    const insertId = await users.create('zlrlo', 'urlurlurl', 'password2');
    return insertId;      
};

