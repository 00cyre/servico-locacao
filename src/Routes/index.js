const moviesRoute = require('../features/Movies/moviesRoute');
//const locacaoRoute = require('../Locacao');
//const historicoRoute = require('../Historico');
const usuarioRoute = require('../features/Users/usersRoute');
module.exports = {
  ...moviesRoute,
  //...locacaoRoute,
  //...historicoRoute,
  ...usuarioRoute,
};
