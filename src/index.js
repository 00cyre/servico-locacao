const app = require('./app');
const { sequelizeConfig } = require('./sequelizeConfig');

const port = process.env.PORT || 3000;

sequelizeConfig.sync({ force: false }).then(async () => {
  app.listen(port, err => {
    if (err) console.log(err);
    console.log(`Servidor executando na porta ${port}`);
  });
});

module.exports = { app };
