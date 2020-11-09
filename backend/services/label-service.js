const labels = require('../models/labels');

exports.labelService = async req => {
  try {
    const labelList = await labels.read(req.body);
    return { status: 202, message: '레이블 읽기 성공', labelList };
  } catch (err) {
    throw err;
  }
};

exports.updateLabelService = async req => {
  try {
    const updatedLabelId = await labels.update(req.body);
    return { status: 202, message: 'label update 성공', updatedLabelId };
  } catch (err) {
    throw err;
  }
};
