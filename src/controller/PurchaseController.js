import Purchase from "../models/Purchase";
import Cart from "../models/Cart";
import Product from "../models/Product";

class PurchaseController {
  async store(req, res) {
    const { id_user } = req.params;

    try {
      // Obter os produtos no carrinho com seus preços
      const cartItems = await Cart.find({ id_user });
      const productIds = cartItems.map(item => item.id_product);
      const productPrices = await Product.find({ _id: { $in: productIds } }, 'id price');

      const products = cartItems.map(item => {
        const product = productPrices.find(product => product._id.toString() === item.id_product.toString());
        const price = product ? product.price : 0;

        return {
          id_product: item.id_product,
          quantity: item.quantity,
          price: price
        };
      });

      // Calcular o total da compra
      const total = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
      console.log("O total é :", total)
      // Criar a compra
      const purchase = new Purchase({
        id_user: id_user,
        products: products,
        totalAmount: total
      });

      // Salvar a compra no banco de dados
      await purchase.save();

      await Cart.deleteMany({ id_user });
      
      res.status(201).json({ message: 'Compra criada com sucesso', purchase });
    } catch (error) {
      console.error('Erro ao criar a compra:', error);
      res.status(500).json({ error: 'Erro ao criar a compra' });
    }
  }
}

export default new PurchaseController();
