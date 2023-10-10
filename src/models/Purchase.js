import { Schema, model } from "mongoose"
  const PurchaseSchema = new Schema({
    id_user: { type: Schema.Types.ObjectId, required: true }, // ID do usuário que fez a compra
    products: [
      {
        id_product: { type: Schema.Types.ObjectId, required: true }, // ID do produto
        quantity: { type: Number, required: true }, // Quantidade do produto
        price: { type: Number, required: true }, // Preço do produto
      }
    ],
    totalAmount: { type: Number, required: true }, // Valor total da compra
    purchaseDate: { type: Date, default: Date.now }, // Data da compra
 })

module.exports = model('Purchase', PurchaseSchema);