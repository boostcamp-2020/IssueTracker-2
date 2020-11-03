const users = require('../models/users');

exports.userService = async req => {
  try {
    const insertId = await users.create(req.body);

    return { status: 200, message: '회원가입 성공', insertId };
  } catch {
    return { status: 400, message: '서비스 실패' };
  }
};
