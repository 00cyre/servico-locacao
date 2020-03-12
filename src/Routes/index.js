const moviesRoute = require('../features/Movies/moviesRoute');
//const locacaoRoute = require('../Locacao');
const rentalRoute = require('../features/Rental/rentalRoute');
const usersRoute = require('../features/Users/usersRoute');
module.exports = {
  ...moviesRoute,
  ...rentalRoute,
  //...locacaoRoute,
  //...historicoRoute,
  ...usersRoute,
};
