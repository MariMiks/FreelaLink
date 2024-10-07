const express = require('express');
const router = express.Router();
const servicoControler = require('../controles/servicoControler');

router.post('/cadastrar', servicoControler.addServico);
router.get('/listarTodos', servicoControler.listTodosServico);
router.get('/listarUm', servicoControler.listUmServico);
 
module.exports = router;