import Cart from "../models/Cart";

class CartController {
  async store(req, res) {
    const { id_user, id_product, quantity } = req.body;

    try {
      let cartItem = await Cart.findOne({ id_user, id_product });

      if (cartItem) {
        // Se o produto já está no carrinho, atualize a quantidade
        cartItem.quantity += quantity;
      } else {
        // Se o produto não está no carrinho, crie um novo item no carrinho
        cartItem = new Cart({ id_user, id_product, quantity });
      }

      // Salve ou atualize o item no carrinho
      await cartItem.save();

      return res.json({ message: 'Produto adicionado ao carrinho com sucesso', cartItem });
    } catch (error) {
      if (error.code === 11000) {
        return res.status(400).json({ error: 'Produto já existe no carrinho', message: error.message });
      }

      return res.status(500).json({ error: 'Erro ao adicionar produto ao carrinho', message: error.message });
    }
  }

  async getCart(req, res) {
    const {id_user} = req.params;
    try {
      const cartItems = await Cart.find({id_user});

      return res.json({ cartItems });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao obter o carrinho', message: error.message });
    }
  } 

  async delete(req, res) {
    const { id_user, id_product } = req.params;
    try {
      const cartItem = await Cart.findOneAndDelete({ id_user, id_product });

      if (!cartItem) {
        return res.status(404).json({ error: 'Produto não encontrado no carrinho' });
      }

      return res.json({ message: 'Produto removido do carrinho com sucesso', cartItem });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao excluir produto do carrinho', message: error.message });
    }
  }
}

export default new CartController();
