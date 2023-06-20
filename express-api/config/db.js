const { Sequelize } = require("sequelize");

const db = new Sequelize("auth_db", "postgres", "akmal", {
  host: "127.0.0.1",
  dialect: "postgres",
});

module.exports = db;
