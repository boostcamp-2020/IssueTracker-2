const db = require('../db');

exports.read = async () => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);
    let sql = `SELECT * FROM labels`;
    const labelListResult = await connection.query(sql);

    connection.release();
    return labelListResult[0];
  } catch (err) {
    throw new Error(err);
  }
};

exports.update = async ({ id, label_name, color, label_description }) => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);
    let sql =
      'Update labels SET label_name = ?, color = ?, label_description = ? WHERE id = ?';
    const [{ generatedLabelId }] = await connection.query(sql, [
      label_name,
      color,
      label_description,
      id,
    ]);
    connection.release();

    return { generatedLabelId };
  } catch (err) {
    throw new Error(err);
  }
};
