"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cadastro_usuarios_1 = __importDefault(require("./cadastro-usuarios"));
const usuarios_1 = __importDefault(require("./usuarios"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('./rotas/cadastro-usuarios', cadastro_usuarios_1.default);
app.use('./rotas/usuarios', usuarios_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
