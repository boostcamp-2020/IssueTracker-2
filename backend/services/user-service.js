const users = require('../models/users');

exports.getUser = async req => {
  try {
    const insertId = await users.findOne(req.body);
    return { status: 200, message: '회원가입 성공', insertId };
  } catch (err) {
    throw err;
  }
};

exports.userService = async req => {
  try {
    const insertId = await users.create(req.body);
    return { status: 200, message: '회원가입 성공', insertId };
  } catch (err) {
    throw err;
  }
};

exports.getAllUser = async req => {
  try {
    const allUser = await users.getAll();
    console.log(allUser);
    return { status: 200, message: '모든 유저 성공', allUser };
  } catch (err) {
    throw err;
  }
};
