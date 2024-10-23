const express = require('express');
const router = express.Router();
const usuarioControler = require('../controles/usuarioControler');

router.post('/cadastrar', usuarioControler.addUsuario);
router.get('/listarUm', usuarioControler.listUsuario);
router.get('/listarTodos', usuarioControler.listTodosUsuario);

module.exports = router;