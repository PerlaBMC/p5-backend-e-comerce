const {Router} = require ("express");
const { crearProducto, obtenerProductos, actualizarProducto, eliminarProducto} = require ("../controllers/products.ctrl")

const router = Router ();

router.get ("/", obtenerProductos);
router.post ("/", crearProducto);
router.put ("/:id", actualizarProducto);
router.delete ("/:id", eliminarProducto);

module.exports = router;