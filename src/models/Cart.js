import { Schema, model } from "mongoose";

const CartSchema = new Schema({
  id_user: { type: Schema.Types.ObjectId, required: true },
  id_product: { type: Schema.Types.ObjectId, required: true },
  quantity: { type: Number, required: true },
});

CartSchema.index({ id_user: 1, id_product: 1 }, { unique: true });

export default model('Cart', CartSchema);
