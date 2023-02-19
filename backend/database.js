import mysql from 'mysql';

const connection = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'gridenflex'
})

export default connection;