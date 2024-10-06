require("dotenv").config();
// const { neon } = require("@neondatabase/serverless");
const { Sequelize } = require('sequelize');

// const sql = neon(process.env.DATABASE_URL);
const sql = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres', 
    logging: false,
  });
  
module.exports = sql;