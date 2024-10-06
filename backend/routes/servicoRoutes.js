const express = require('express');
const router = express.Router();
const servicoControler = require('../controles/servicoControler');

router.post('/cadastrar', servicoControler.addServico);
router.get('/listar', servicoControler.listServico);

export default servicoRouter;