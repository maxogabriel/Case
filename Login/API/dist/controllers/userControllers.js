"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.registerUser = void 0;
const registerUser = (req, res) => {
    res.send('Usuário registrado');
};
exports.registerUser = registerUser;
const getUsers = (req, res) => {
    res.send('Lista de usuários');
};
exports.getUsers = getUsers;
