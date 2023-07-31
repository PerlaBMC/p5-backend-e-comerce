const { Schema, model } = require("mongoose");

const CollectionSchema = Schema({
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

CollectionSchema.methods.toJSON = function () {
  const { __v, _id, ...rest } = this.toObject();
  rest.id = _id;
  return rest;
};

module.exports = model("collection", CollectionSchema, "collections");