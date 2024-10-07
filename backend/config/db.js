// const { neon } = require("@neondatabase/serverless");
// const sql = neon(process.env.DATABASE_URL);
require("dotenv").config();
const { Sequelize } = require('sequelize');

const sql = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres', 
    logging: false,
  });
  
module.exports = sql;