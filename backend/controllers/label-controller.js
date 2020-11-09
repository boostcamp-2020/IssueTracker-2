const service = require('../services/label-service');

exports.readLabel = async (req, res, next) => {
  try {
    const { status, message, labelList } = await service.labelService(req);
    res.status(status).json({ message, labels: labelList });
  } catch (err) {
    next(err);
  }
};

exports.deleteLabel = async (req, res, next) => {
  try {
    const { status, message, deleteLabelId } = await service.deleteLabelService(
      req,
    );
    res.status(status).json({ message, deleteLabelId });
  } catch (err) {
    next(err);
  }
};
