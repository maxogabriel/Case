import * as mysql from 'mysql';

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1",
    database: "crud1",
})