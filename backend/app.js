const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => { res.send('Primeiro GET') });

app.listen(port, () => console.log(`Servidor rodando na ${port}`));