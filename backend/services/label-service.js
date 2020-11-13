const labels = require('../models/labels');

exports.labelService = async req => {
  try {
    const labelList = await labels.read(req.body);
    return { status: 202, message: '레이블 읽기 성공', labelList };
  } catch (err) {
    throw err;
  }
};

exports.deleteLabelService = async req => {
  try {
    console.log(req.body);
    const deleteLabelId = await labels.delete(req.body);
    return { status: 202, message: 'label delete success', deleteLabelId };
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

exports.addlabelService = async req => {
  try {
    console.log('req', req.body);
    const { generatedLabelId } = await labels.create(req.body);
    return { status: 202, message: '레이블 추가 성공', generatedLabelId };
  } catch (err) {
    throw err;
  }
};
