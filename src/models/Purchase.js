import { Schema, model } from "mongoose"
  const PurchaseSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true, startAt: 1},
    _id_buyer: { type: Schema.Types.ObjectId},
    _id_product: { type: Schema.Types.ObjectId},
    name_buyer: { type: String},
    name_product: { type: String},
    image_path: {type: String},
    price:{type: Number},
    quantity :{type: String},
    totalPrice:{type: Number},
    datePurchased:{type:String},
    status:{type:String},
 })

module.exports = model('Purchase', PurchaseSchema);