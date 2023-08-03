const { Schema, model } = require("mongoose");

const CollectionTresSchema = Schema({
  name: {
    type: String,
    required: [true, "El name es obligatorio"],
    unique: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
  },
});

CollectionTresSchema.methods.toJSON = function () {
  const { __v, _id, ...rest } = this.toObject();
  rest.id = _id;
  return rest;
};

module.exports = model("collection3", CollectionTresSchema, "collections3");