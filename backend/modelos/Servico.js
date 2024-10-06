import Usuario from './Usuario';

const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Servico = db.define('Servico', {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    titulo:{
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao:{
        type: DataTypes.STRING,
        allowNull: false
    },
    periodo:{
        type: DataTypes.STRING,
        allowNull: false
    },
    local:{
        type: DataTypes.STRING,
        allowNull: false
    },
    data:{
        type: DataTypes.DATE,
        allowNull: false
    },
    imagem:{
        type: DataTypes.STRING,
        allowNull: true
    },
    tipo:{
        type: DataTypes.BIGINT,
        allowNull: false
    },
    id_solicitante:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_prestador: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    qntd_pessoa:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'servico',
    timestamps: true
})

Servico.belongsTo(Usuario, {foreignKey:{name:id_solicitante}});
Servico.belongsTo(Usuario, {foreignKey:{name:id_prestador}});
Usuario.Servico = Usuario.hasMany(Servico, {foreignKey:"id_solicitante"});
Servico.Usuario = Servico.hasMany(Usuario, {foreignKey:"id_prestador"});

export default Servico;