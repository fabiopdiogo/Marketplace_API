import express, { Router } from 'express'

import UserController from '../controller/UserController';
import SessionController from '../controller/SessionController';
const router = Router();

router.use(express.json());

router.post("/cadastro", UserController.store);

router.post('/login', SessionController.store);

router.put("/atualizar/:id", UserController.update);

router.delete("/excluir/:id", UserController.delete);

export default router; 