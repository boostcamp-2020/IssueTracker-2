const db = require('../db');

exports.create = async ({ label_name, color, label_description }) => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);
    let sql =
      'INSERT INTO labels ( label_name, color, label_description) VALUES ( ?, ?, ?)';
    const [{ generatedLabelId }] = await connection.query(sql, [
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

exports.delete = async ({ id }) => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);
    let sql = 'DELETE FROM labels WHERE id = ?';
    const [{ deleteLabelId }] = await connection.query(sql, [id]);
    connection.release();
    return deleteLabelId;
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

exports.getAllCount = async () => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);
    let sql = `SELECT count(*) as count FROM labels `;
    const [[count]] = await connection.query(sql);

    connection.release();
    return count;
  } catch (err) {
    throw new Error(err);
  }
};
