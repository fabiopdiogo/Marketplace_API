import { Schema, model } from "mongoose";

const cartItemSchema = new Schema(
  {
    id_product: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { _id: false } // Define a opção _id como false para o subesquema
);
const CartSchema = new Schema({
  id_user: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  items: [cartItemSchema],
});

export default model('Cart', CartSchema);
