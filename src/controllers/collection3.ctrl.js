const CollectionTresSchema= require("../models/collection3");

const obtenerCollecciones = async (req, res) => {
  try {
    const collections = await CollectionTresSchema.find();

    return res.json({
      ok: true,
      msg: "Colecciones obtenidas",
      data: collections,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error en el servidor",
      data: {},
    });
  }
};

const obtenerColleccion = async (req, res) => {
  try {
    const { id } = req.params;
    const collection= await CollectionTresSchema.findById(id);

    return res.json({
      ok: true,
      msg: "Colección obtenida",
      data: collection,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error en el servidor",
      data: {},
    });
  }
};

const crearCollection = async (req, res) => {
  try {
    const { name, description, price, image } = req.body;

    const nueva_colleccion = {
      name,
      description,
      price,
      image,
    };

    const new_collection = await CollectionTresSchema(nueva_colleccion).save();

    return res.json({
      ok: true,
      msg: "Colección creada",
      data: new_collection,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error en el servidor",
      data: {},
    });
  }
};

const actualizarCollection= async (req, res) => {
  try {
      const {id} = req.params;
      const { name, description, price, image } = req.body;

      const informacion_nueva = {
          name,
          description,
          price,
          image
      };
      const collection_actualizada = await CollectionTresSchema.findByIdAndUpdate (id, informacion_nueva, { new: true })
      return res.json ({
      ok: true,
      msg: "colección actualizado",
      data: collection_actualizada,
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
crearCollection,
obtenerCollecciones,
obtenerColleccion,
actualizarCollection
};