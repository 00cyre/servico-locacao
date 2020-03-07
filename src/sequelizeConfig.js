const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const conexaoDB = {
  conexao: {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    logging: false
  }
};

let operatorsAliases = {};
operatorsAliases = Object.keys(Op).forEach(key => (operatorsAliases[`\$${key}`] = Op[key]));
const sequelizeConfig = new Sequelize(
  'locacao',
  'root',
  'admin',
  { ...conexaoDB.conexao },
  { operatorsAliases }
);

sequelizeConfig
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = { sequelizeConfig };

