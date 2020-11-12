const service = require('../services/label-service');

exports.login = async (req, res, next) => {
  try {
      const nickname = req.body.nickname;
      const userInfo = await users.findOne({ username: nickname });
      let insertId; 

      if (!userInfo) {
          insertId = await users.create({
              id: nickname,
              profileImageUrl: avatar,
              password: 'password',
        });
      } else {
        insertId = userInfo.sid;
      }

    res.status(202).json({ message : '회원가입 성공', sid : insertId });
  } catch (err) {
    next(err);
  }
};




 
  if (!userInfo) {
    insertId = await users.create({
      id: nickname,
      profileImageUrl: avatar,
      password: 'initial',
    });
  } else {
    insertId = userInfo.sid;
  }