const express = require('express');
const db = require('./config/db');
require("dotenv").config();

const PORTA_EX = process.env.PORT || 5000;
const servicoRouter = require("./routes/servicoRoutes");
const usuarioRouter = require("./routes/usuarioRoutes")
require('./relacoes/relacoes')

db.sync()
    .then(() => {
        console.log("Banco de dados sincronizado com sucesso.");
    })
    .catch(err => {
        console.error("Erro ao sincronizar com o banco de dados:", err);
    });


const app = express();
app.use(express.json());

app.use('/servico', servicoRouter);
app.use('/usuario', usuarioRouter);




app.listen(PORTA_EX, () => console.log(`Servidor rodando na ${PORTA_EX}`));