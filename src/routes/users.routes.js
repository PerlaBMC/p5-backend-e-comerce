const { Router } = require("express")
const { obetenerUsuario, crearUsuarios, actualizarUsuario, eliminarUsuario} = require ("../controllers/users.ctrl")

const router = Router ();

router.get ("/", obetenerUsuario);
router.post ("/", crearUsuarios);
router.put ("/:id", actualizarUsuario);
router.delete ("/:id", eliminarUsuario);

module.exports = router;
