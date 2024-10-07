const { DataTypes } = require('sequelize');
const db = require('../config/db');
const Usuario = require('./Usuario')

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
        allowNull: false,
        references: {
            model: Usuario,
            key: 'id'
        }
    },
    id_prestador: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Usuario,
            key: 'id'
        }
    },
    qntd_pessoa:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'servico',
    timestamps: true
})

module.exports = Servico;