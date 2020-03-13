const moviesRoute = require('../features/Movies/moviesRoute');
const historyRoute = require('../features/History/historyRoute');
const rentalRoute = require('../features/Rental/rentalRoute');
const usersRoute = require('../features/Users/usersRoute');
module.exports = {
  ...moviesRoute,
  ...rentalRoute,
  ...historyRoute,
  ...usersRoute,
};
