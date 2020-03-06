const express = require('express');
const { filmesRoute } = require('./Routes');

class App {
  constructor() {
    this.express = express();
    this.montarRotas();
  }

  montarRotas() {
    this.express.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.header('Access-Control-Allow-Methods', '*');
      next();
    });

    //this.express.use('/filmes', express.Router(), filmesRoute);
    //this.express.use('/locacao', express.Router(), locacaoRoute);
    //this.express.use('/historico', express.Router(), historicoRoute);
    //this.express.use('/usuario', express.Router(), usuarioRoute);
  }
}

module.exports = new App().express;
