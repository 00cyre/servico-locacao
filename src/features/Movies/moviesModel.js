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
      validate: {
        notEmpty:
        {
          msg: "The Field Nome does not accept a NULL value"
        }
      }
    },
    Genero: {
      type: Sequelize.STRING(50),
      required: true,
      allowNull: false,
      validate: {
        notEmpty:
        {
          msg: "The Field Genero does not accept a NULL value"
        }
      }
    },
    Diretor: {
      type: Sequelize.STRING(50),
      required: true,
      allowNull: false,
      validate: {
        notEmpty:
        {
          msg: "The Field Director does not accept a NULL value"
        }
      }
    },
    Quantidade: {
      type: Sequelize.INTEGER,
      required: true,
      allowNull: false,
      validate: {
        notEmpty:
        {
          msg: "The Field Quantidade does not accept a NULL value"
        }
      }
    },
    createdAt:
    {
      type: Sequelize.DATE,
      required:false,
      allowNull:true,
    },
    updatedAt:
    {
      type: Sequelize.DATE,
      required:false,
      allowNull:true,
      defaultValue:Sequelize.fn("NOW"),
    },
    deletedAt:
    {
      type: Sequelize.DATE,
      required:false,
      allowNull:true,
    }
  },
  {
    tableName: "Movies",
    freezeTableName: true,
    paranoid: true
  }
);

module.exports = { MoviesModel };
