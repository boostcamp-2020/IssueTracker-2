const labels = require('../models/labels');

exports.labelService = async req => {
  try {
    const labelList = await labels.read(req.body);

    return { status: 200, message: '레이블 읽기 성공', labelList };
  } catch {
    return { status: 400, message: '레이블 읽기 서비스 실패' };
  }
};
