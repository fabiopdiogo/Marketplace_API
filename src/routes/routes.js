import express, { Router } from 'express'

import authMiddleware from '../middlewares/auth';

import ProductController from '../controller/ProductController';
import UserController from '../controller/UserController';
import SessionController from '../controller/SessionController';
import CartController from '../controller/CartController';

const router = Router();

router.use(express.json());

router.post('/login', SessionController.store);

router.post('/validate',SessionController.validate);
router.post("/cadastro", UserController.store);
router.put("/atualizar/:id", UserController.update);

router.delete("/excluir/:id", UserController.delete);

router.post('/carrinho', CartController.store);
router.get('/carrinho/:id_user', CartController.getCart);

router.get('/item/:_id', ProductController.getProduct);
 
export default router; 