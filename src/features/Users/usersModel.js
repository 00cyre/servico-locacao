const Sequelize = require("sequelize");
const { sequelizeConfig } = require("../../sequelizeConfig");

const UsersModel = sequelizeConfig.define(
  "Users",
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
    Sexo: {
      type: Sequelize.BOOLEAN,
      required: true,
      allowNull: false,
      validate: {
        notEmpty:
        {
          msg: "The Field Sexo does not accept a NULL value"
        }
      }
    },
    Cpf: {
      type: Sequelize.STRING(50),
      required: true,
      allowNull: false,
      validate: {
        notEmpty:
        {
          msg: "The Field Cpf does not accept a NULL value"
        }
      }
    },
    DataNascimento: {
      type: Sequelize.DATE,
      required: true,
      allowNull: false,
      validate: {
        notEmpty:
        {
          msg: "The Field DataNascimento does not accept a NULL value"
        }
      }
    }
  },
  {
    tableName: "Users",
    freezeTableName: true,
    paranoid: true
  }
);

module.exports = { UsersModel };
