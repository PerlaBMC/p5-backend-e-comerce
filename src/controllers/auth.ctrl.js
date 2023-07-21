const user = require ("../models/user");
const bcrypt = require ("bcrypt");
const { generarJWT } = require ("../helpers/jwt.helper");


const registrarUsuario = async (req, res) => {
    try {
    const {user_name, password}= req.body;

const usuario = await user.findOne ({user_name: user_name});

if (usuario) {
    return res.status(400).json({
        ok: false, 
        msg: `El usuaruio ${user_name} ya existe`,
        data: {}
    });
}

    const salt = bcrypt.genSaltSync (10)

    const nuevo_usuario = {
        user_name,
        password: bcrypt.hashSync(password, salt),
    };

    const new_user = await user (nuevo_usuario).save();

    const token = await generarJWT(new_user.id)

 return res.json ({
    ok: true, 
    msg: "Usuario registrado",
    data: new_user,
    token
 })
} catch (error) {
    return res.status (500).json ({
        ok:false,
        msg: "error en el servidor",
        data: {},
    })
}
};

const iniciarSesion = async (req, res) => {
    try {
const { user_name, password} = req.body;

const usuario = await user.findOne ({user_name: user_name})

if(!usuario) {
return res.status(400).json ({
    ok: false, 
    msg: "Usuario o password incorrecto",
    data: {},
});
}

const valiPassword = bcrypt.compareSync(password, usuario.password);

if (!valiPassword) {
    return res.status(400).json({
        ok: false, 
        msg: "Usuario o password incorrecto",
        data: {},
    })
}

const token = await generarJWT (usuario.id)

    return res.json ({
        ok: true,
        msg: "acceso correcto",
        data: usuario,
        token
    })
} catch (error) {
    return res.status(500).json ({
        ok: false, 
        msg: "Error en el servidor",
        data: {}
    })
}
}


const renovarToken = async (req, res) => {
try {
     
    const {usuario} = req;

    const token = await generarJWT (usuario.id);

    return res.json ({
        ok:true,
        msg: "token renovado", 
        data: usuario,
        token
    })
} catch (error) {
    return res.status(401).json ({
        ok: false,
        msg: "Error en el servidor",
        data: {}
    })
    
}
  };

module.exports = {
    registrarUsuario, 
    iniciarSesion, 
    renovarToken
}