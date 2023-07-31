const { Router } = require("express");
const { validarJWT } = require("../middlewares/jwt.middleware");

const {
  crearProducto,
  obtenerProductos,
  obtenerProducto,
  actualizarProducto
} = require("../controllers/productclass.ctrl");

const router = Router();

router.get("/", obtenerProductos);
router.get("/:id", obtenerProducto);
router.post("/", validarJWT, crearProducto);
router.put ("/:id", actualizarProducto)

module.exports = router;