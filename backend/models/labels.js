const db = require('../db');

exports.create = async ({ id, label_name, color, label_description }) => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);
    let sql =
      'INSERT INTO labels (id, label_name, color, label_description) VALUES (?, ?, ?, ?)';
    const [{ generatedLabelId }] = await connection.query(sql, [
      id,
      label_name,
      color,
      label_description,
    ]);
    connection.release();

    return { generatedLabelId };
  } catch (err) {
    throw new Error(err);
  }
};

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
