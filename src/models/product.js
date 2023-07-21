const {Schema, model} = require ("mongoose");

const productSchema = Schema ({
    product_name: {
        type: String,
        required: [true, "el produc_name es obligatorio"],
        unique: true,
    },

    description: {
        type: String,
    },

    price: {
        type:String,
    },

    img: {
        type: String                                                                                                                        
    }

})

productSchema.methods.toJSON = function () {
    const { __v, _id, ...rest}  = this.toObject();
    rest.id = _id;
    return rest;
}

module.exports = model ("product", productSchema, "products")   