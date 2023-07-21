const { Schema, model } = require ("mongoose");

const userSchema = Schema ({
    user_name : {
        type: String,
        required: [true, "El user_name es obligatorio"],
        unique: true,
    },

    password: {
        type: String
    },

    email: {
        type: String
    },
});

userSchema.methods.toJSON = function () {
    const { __v, _id, ...rest}  = this.toObject();
    rest.id = _id;
    return rest;
}

module.exports = model ("user", userSchema, "users")