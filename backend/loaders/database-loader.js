const db = require('../db');

const SQL_DROP_USER_TABLE = `DROP TABLE IF EXISTS users;`;
const SQL_CREATE_USER_TABLE = `  
    CREATE TABLE users (
        sid int PRIMARY KEY AUTO_INCREMENT,
        nickname varchar(255),
        profile_image_url varchar(255),
        password varchar(255)
    );`;

const createUserTable = async () => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);
    connection
      .query(SQL_DROP_USER_TABLE)
      .then(() => connection.query(SQL_CREATE_USER_TABLE))
      .then(() => connection.release());
  } catch (err) {
    throw new Error(err);
  }
};

createUserTable();
