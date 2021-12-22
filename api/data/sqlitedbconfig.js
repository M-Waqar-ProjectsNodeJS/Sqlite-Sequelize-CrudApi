const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  host: "./TestDb.sqlite",
});

module.exports = sequelize;
