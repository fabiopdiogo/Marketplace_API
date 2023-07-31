import express, { Router } from 'express'

import UserController from '../controller/UserController';

const router = Router();

router.use(express.json());

router.post("/cadastro", UserController.store);

router.get("/listar", UserController.index);

router.put("/atualizar/:index", UserController.update);

router.delete("/excluir/:index", UserController.delete);

export default router;