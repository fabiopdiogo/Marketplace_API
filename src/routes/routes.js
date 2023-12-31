import express, { Router } from 'express'

import authMiddleware from '../middlewares/auth';

import ProductController from '../controller/ProductController';
import UserController from '../controller/UserController';
import SessionController from '../controller/SessionController';
import CartController from '../controller/CartController';
import PurchaseController from '../controller/PurchaseController';

const router = Router();

router.use(express.json());

router.post('/login', SessionController.store);

router.post('/validate',SessionController.validate);
router.post("/cadastro", UserController.store);
router.put("/atualizar/:id", UserController.update);

router.delete("/excluir/:id", UserController.delete);

router.post('/carrinho', CartController.store);
router.get('/carrinho/:id_user', CartController.getCart);
router.delete('/carrinho/:id_user/:id_product', CartController.delete);
router.put('/atualizarcarrinho/:id_user/:id_product', CartController.updateQuantity);

router.get('/get', ProductController.getAll);
router.get('/item/:_id', ProductController.getProduct);

router.post("/compra/:id_user", PurchaseController.store);

export default router; 