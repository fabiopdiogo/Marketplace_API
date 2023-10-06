import Product from '../models/Product';

class ProductController {
  async getProduct(req, res) {
    try {
      const { _id } = req.params;  
      const product = await Product.find({_id});
      return res.json({ product });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar o produto', message: error.message });
    }
  }
}

export default new ProductController();
