const service = require('../services/user-service');

exports.addUser = async (req, res, next) => {
 try {
   const { status, message, insertId } = await service.userService(req);
    res.status(status).json({ message, insertId });
 } catch(err) {
    next(err);
 }
};
