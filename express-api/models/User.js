const { Sequelize, DataTypes } = require("sequelize");
const db = require("./../config/db");

const User = db.define("Users", {
  nama: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  refresh_token: {
    type: DataTypes.TEXT,
  },
});

module.exports = User;
