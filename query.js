import mysql from 'mysql2';
import CONFIG from './config.js';

const pool = mysql.createPool(CONFIG)

const promisePool = pool.promise()

const query = async (sql) => {
    const [rows,fields] = await promisePool.query(sql);
    return rows;

}

export default query;