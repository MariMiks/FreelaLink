const Servico = require('../modelos/Servico');

exports.addServico = async (req, res) => {
    try {
        const servico = await Servico.create({
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            periodo: req.body.periodo,
            local: req.body.local,
            data: req.body.data,
            imagem: req.body.imagem,
            tipo: req.body.imagem,
            tipo: req.body.tipo,
            id_solicitante: req.body.id_solicitante,
            id_prestador: req.body.id_prestador,
            qntd_pessoa: req.body.qntd_pessoa
        })
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.listTodosServico = async (req, res) => {
    try {
        const servicos = await Servico.findAll({
            include: [
                { model: Usuario, as: 'solicitante' },
                { model: Usuario, as: 'prestador' }
            ]
        });

        res.status(200).json(users);
        console.log('passou na listagem')
    } catch (err) {
        res.status(500).json({ message: err });
    }
}

exports.listUmServico = async (req, res) => {
    try {
        const servico = await Servico.findOne({
            where: {
                id: req.params.id
            }
        })
        if (dado != null) {
            res.status(302).json(dado);
        } else {
            res.status(404).json({ message: "Serviço não encontrado" })
        }
    } catch (err) {
        res.status(404).json({ message: err })
    }
}