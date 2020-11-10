const service = require('../services/label-service');

exports.readLabel = async (req, res, next) => {
  try {
    const { status, message, labelList } = await service.labelService(req);
    res.status(status).json({ message, labels: labelList });
  } catch (err) {
    next(err);
  }
};

exports.addLabel = async (req, res, next) => {
  try {
    const { status, message, generatedLabelId } = await service.addlabelService(
      req,
    );
    res.status(status).json({ message, labelId: generatedLabelId });
  } catch (err) {
    next(err);
  }
};
