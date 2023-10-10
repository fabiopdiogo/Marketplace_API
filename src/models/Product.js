import { Schema, model } from "mongoose"
  const ProductSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true, startAt: 1},
    name: { type: String},
    image_path: {type: String},
    price: {type: Number}
  })

module.exports = model('Product', ProductSchema);