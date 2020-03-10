const Sequelize = require("sequelize");
const { sequelizeConfig } = require("../../sequelizeConfig");

const RentalModel = sequelizeConfig.define(
  "Rental",
  {
    Id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    MovieId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'movies',
        key: 'id'
      }
    },
    UserId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users', // <<< Note, its table's name, not object name
        key: 'id' // <<< Note, its a column name
      }
    },
    DataDevolucao: {
      type: Sequelize.DATE,
      required: false,
      allowNull: true,
      defaultValue:null,
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
    tableName: "Rental",
    freezeTableName: true,
    paranoid: true
  }
);

module.exports = { RentalModel };
