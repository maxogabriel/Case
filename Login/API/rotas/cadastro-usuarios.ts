import { PrismaClient } from '@prisma/client'
import { Router } from 'express';
import bcrypot from 'bcrypt';
import { registerUser } from './controllers/userControllers';

const router = Router();

const prisma = new PrismaClient();

router.post('/', registerUser);

export default router;
