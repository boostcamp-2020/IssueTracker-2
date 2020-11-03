const db = require('../loaders/db-loader');

exports.create = async(id, profileImageUrl, password) => {
    try {
        const connection = await db.pool.getConnection(async conn => conn);
        let sql = 'INSERT INTO users (id, profile_image_url, password) VALUES (?, ?, ?)';
        const [{insertId}] = await connection.query(sql, [id, profileImageUrl, password]);
        connection.release();
        return insertId;

    } catch(err) {
        console.log(err); 
    }
};