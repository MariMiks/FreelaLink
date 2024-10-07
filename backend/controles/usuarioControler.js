const Usuario = require('../modelos/Usuario');
const Servico = require('../modelos/Servico');

exports.addUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            telefone: req.body.telefone
        });

        res.status(200).json(users);
    } catch(err){
        console.log(`Erro ao cadastrar usuário ${err}`)
        res.status(500).json({ message: err });
    }
};

exports.listUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findOne({
            where:{
                id: req.params.id
            }
        })
        if(dado != null) {
            res.status(302).json(dado);
        } else {
            res.status(404).json({ message: "Usuário não encontrado" })
        }
    } catch(err) {
        res.status(404).json({ message: err })
    }
}

exports.listTodosUsuario = async (req, res) => {
    try {
        const servicos = await Servico.findAll({
            include: [
                { model: Servico, as: 'servicosSolicitados' },
                { model: Servico, as: 'servicosPrestados' }
            ]
        });

        res.status(200).json(users);
        console.log('passou na listagem usuarios')
    } catch (err) {
        res.status(500).json({ message: err });
    }
}