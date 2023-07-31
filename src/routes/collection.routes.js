const { Router } = require("express");
const { validarJWT } = require("../middlewares/jwt.middleware");

const {
  crearCollection,
  obtenerCollecciones,
  obtenerColleccion,
  actualizarCollection
} = require("../controllers/collection.ctrl")

const router = Router();

router.get("/", obtenerCollecciones);
router.get("/:id", obtenerColleccion);
router.post("/", validarJWT, crearCollection);
router.post("/simpson", validarJWT, crearCollection);
router.put ("/:id", actualizarCollection)

module.exports = router;