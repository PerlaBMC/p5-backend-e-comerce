const ProductSchema = require("../models/productclass");

const obtenerProductos = async (req, res) => {
  try {
    const products = await ProductSchema.find();

    return res.json({
      ok: true,
      msg: "Productos obtenidos",
      data: products,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error en el servidor",
      data: {},
    });
  }
};

const obtenerProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductSchema.findById(id);

    return res.json({
      ok: true,
      msg: "Producto obtenido",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error en el servidor",
      data: {},
    });
  }
};

const crearProducto = async (req, res) => {
  try {
    const { name, description, price, image } = req.body;

    const nuevo_producto = {
      name,
      description,
      price,
      image,
    };

    const new_product = await ProductSchema(nuevo_producto).save();

    return res.json({
      ok: true,
      msg: "Producto creado",
      data: new_product,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error en el servidor",
      data: {},
    });
  }
};

const actualizarProducto = async (req, res) => {
  try {
      const {id} = req.params;
      const { name, description, price, image } = req.body;

      const informacion_nueva = {
          name,
          description,
          price, 
          image
      };
      const producto_actualizado = await ProductSchema.findByIdAndUpdate (id, informacion_nueva, { new: true })
      return res.json ({
      ok: true,
      msg: "producto actualizado",
      data: producto_actualizado,
  });
} catch (error) {
  return res.status (500).json ({
      ok: false,
      msg: "error en el servidor",
      daata: {}
  })
}
};

module.exports = {
  crearProducto,
  obtenerProductos,
  obtenerProducto,
  actualizarProducto
};