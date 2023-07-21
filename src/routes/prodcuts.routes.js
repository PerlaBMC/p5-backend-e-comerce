const {Router} = require ("express");
const { crearProducto, obtenerProductos, actualizarProducto, eliminarProducto} = require ("../controllers/products.ctrl")
const {validarJWT} = require ("../middlewares/jwt.middleware")

const router = Router ();

router.get ("/", obtenerProductos);
router.post ("/",validarJWT, crearProducto);
router.put ("/:id", actualizarProducto);
router.delete ("/:id", eliminarProducto);

module.exports = router;