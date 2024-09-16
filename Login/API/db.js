"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var mysql = require("mysql");
exports.db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1",
    database: "crud1",
});
