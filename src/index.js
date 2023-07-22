require ("dotenv").config();
const express = require ("express");
const {dbConnection} = require ("./database/config")
const app = express ();
const cors = require ("cors")

dbConnection ();
app.use (cors());
app.use (express.json ());

app.get ("/api", (req, res) => {
    return res.json ({
        msg: "Welcome to my Api"
    });
});

app.use ("/api/usuarios", require ("./routes/users.routes"))
app.use ("/api/productos", require ("./routes/prodcuts.routes"))
app.use ("/api/auth", require ("./routes/auth.routes"))
app.use ("/api/productsclass", require ("./routes/productsclass.routes"))

app.listen (process.env.PORT, () => {
    console.log (`Servidor vivo en el puerto ${process.env.PORT}`)
})