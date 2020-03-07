const Sequelize = require("sequelize");
const { sequelizeConfig } = require("../../sequelizeConfig");

const MoviesModel = sequelizeConfig.define(
  "Movies",
  {
    Id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    Nome: {
      type: Sequelize.STRING(50),
      required: true,
      allowNull: false,
    },
    Genero: {
      type: Sequelize.STRING(50),
      required: true,
      allowNull: false,
    },
    Diretor: {
      type: Sequelize.STRING(50),
      required: true,
      allowNull: false,
    },
    Quantidade: {
      type: Sequelize.INTEGER,
    }
  },
  {
    tableName: "Movies",
    freezeTableName: true,
    paranoid: true
  }
);

module.exports = { MoviesModel };
