const Usuario = require('../modelos/Usuario');
const Servico = require('../modelos/Servico');

Usuario.hasMany(Servico, { foreignKey: 'id_solicitante', as: 'servicosSolicitados' });
Usuario.hasMany(Servico, { foreignKey: 'id_prestador', as: 'servicosPrestados' });
Servico.belongsTo(Usuario, { foreignKey: 'id_solicitante', as: 'solicitante' });
Servico.belongsTo(Usuario, { foreignKey: 'id_prestador', as: 'prestador' });

module.exports = { Usuario, Servico };
