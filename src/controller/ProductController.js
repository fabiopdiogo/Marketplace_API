import Product from  "../models/Product"

class ProductController {
   async get(req, res) {
    // Verificando se esse email existe
    const product = await Product.find()
   
    return res.json(product)
  }
}

export default new ProductController();