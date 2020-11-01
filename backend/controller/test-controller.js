const service = require('../service/test-service');

exports.addUser = async(req, res, next) => {
     const insertId = await service.userService(); 
     res.json(insertId); 
};

