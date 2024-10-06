require("dotenv").config();
const PORTA_EX = process.env.PORT || 5000;
const express = require('express');
const db = require('./config/db');
const { default: servicoRouter } = require("./routes/servicoRoutes");

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




app.listen(PORTA_EX, () => console.log(`Servidor rodando na ${PORTA_EX}`));