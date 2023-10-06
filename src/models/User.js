import { Schema, model } from "mongoose"
  const UserSchema = new Schema({
    _id_carrinho: { type: Schema.Types.ObjectId, auto: true, startAt: 1},
    name: { type: String},
    lastName: { type: String },
    email: {type: String},
    date_of_birth: {type: String},
    sex:{type: String},
    cpf:{type: String},
    number:{type: String},
    password: {type: String},
    passwordHash: {type: String}
  })

module.exports = model('User', UserSchema);