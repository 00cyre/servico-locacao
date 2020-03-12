const express = require('express');
const { moviesRoute,usersRoute,rentalRoute } = require('./Routes');
const bodyParser = require('body-parser');
class App {
  constructor() {
    this.express = express();
    this.setupRoutes();
  }

  setupRoutes() {
    
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.header('Access-Control-Allow-Methods', '*');
      next();
    });

    this.express.use('/filmes', express.Router(), moviesRoute);
    //this.express.use('/locacao', express.Router(), locacaoRoute);
    this.express.use('/usuarios', express.Router(), usersRoute);
    this.express.use('/alugar', express.Router(), rentalRoute);
  }
}

module.exports = new App().express;
