import Cart from "../models/Cart";

class CartController {
  
  async store(req, res) {
    const itemsToAdd = req.body; // Vetor de objetos JSON
  
    try {
      for (const item of itemsToAdd) {
        const { id_user, id_product, quantity } = item;
        let cart = await Cart.findOne({ id_user });
  
        if (!cart) {
          // Se o carrinho do usuário não existe, crie um novo carrinho
          cart = new Cart({ id_user, items: [] });
        }
  
        // Verifique se o produto já está no carrinho
        const existingItem = cart.items.find((cartItem) => cartItem.id_product.equals(id_product));
  
        if (existingItem) {
          // Se o produto já está no carrinho, atualize a quantidade
          existingItem.quantity += quantity;
        } else {
          // Se o produto não está no carrinho, crie um novo item no carrinho
          cart.items.push({ id_product, quantity });
        }
  
        // Salve ou atualize o carrinho
        await cart.save();
      }
  
      return res.status(200).json({ message: 'Produtos adicionados ao carrinho com sucesso' });
    } catch (error) {
      if (error.code === 11000) {
        return res.status(400).json({ error: 'Produto já existe no carrinho', message: error.message });
      }
  
      return res.status(500).json({ error: 'Erro ao adicionar produto(s) ao carrinho', message: error.message });
    }
  }
  

  async getCart(req, res) {
    const {id_user} = req.params;
    try {
      const cartItems = await Cart.find({id_user});
      //console.log(cartItems)
      return res.json({ cartItems });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao obter o carrinho', message: error.message });
    }
  } 

  async updateQuantity(req, res) {
    const { id_user, id_product } = req.params;
    const { quantity } = req.body;
    console.log({ id_user, id_product, quantity })
    try {
      const cartItem = await Cart.findOne({ id_user, id_product });
      console.log(cartItem)
      if (!cartItem) {
        return res.status(404).json({ error: 'Produto não encontrado no carrinho' });
      }

      // Atualize a quantidade do produto no carrinho
      cartItem.quantity = quantity;
      await cartItem.save();

      return res.json({ message: 'Quantidade do produto atualizada com sucesso', cartItem });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar a quantidade do produto no carrinho', message: error.message });
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
