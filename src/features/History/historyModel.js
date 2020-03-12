const Sequelize = require("sequelize");
const { sequelizeConfig } = require("../../sequelizeConfig");

const HistoryModel = sequelizeConfig.define(
  "History",
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
        model: 'users',
        key: 'id' 
      }
    },
    DateRent: {
      type: Sequelize.DATE,
      required: false,
      allowNull: true,
      defaultValue: null,
    },    
    RentId:
    {
      type: Sequelize.INTEGER,
      required:true,
      allowNull:false,

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
    tableName: "History",
    freezeTableName: true,
    paranoid: true
  }
);

module.exports = { HistoryModel };
