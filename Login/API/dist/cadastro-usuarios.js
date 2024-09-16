"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = require("express");
const userControllers_1 = require("./controllers/userControllers");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
router.post('/', userControllers_1.registerUser);
exports.default = router;
