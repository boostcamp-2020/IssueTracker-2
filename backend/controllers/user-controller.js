const service = require('../services/user-service');

exports.addUser = async (req, res, next) => {
  console.log(req.body);
  const { status, message, insertId } = await service.userService(req);
  res.status(status).json({ message, insertId });
};
