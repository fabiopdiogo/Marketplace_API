import express, { Router } from 'express'

import authMiddleware from '../middlewares/auth';

import ProductController from '../controller/ProductController';
import UserController from '../controller/UserController';
import SessionController from '../controller/SessionController';
import PurchaseController from '../controller/PurchaseController';

const router = Router();

router.use(express.json());

router.get("/get", ProductController.get);

router.post('/login', SessionController.store);

router.post('/validate',SessionController.validate);
router.post("/cadastro", UserController.store);
router.post('/validate', SessionController.validate);
router.put("/atualizar/:id", UserController.update);

router.delete("/excluir/:id", UserController.delete);

router.post('/carrinho/:_id', PurchaseController.store);

export default router; 