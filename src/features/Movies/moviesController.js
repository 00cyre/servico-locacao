const BaseController = require('../../shared/baseController');
const { MoviesModel } = require('./index');
const _ = require('lodash');
class MoviesController {
  constructor() {
    this.baseController = new BaseController(MoviesModel);
  }
  async insertMovie(movieObj)
  {
    try {
      
    } catch (error) {
      throw new Error('Error while trying to insert into Movies')
    }
  }
  async getMovieById(IdMovie) {
    try {
      const movieObject = await this.baseController.getById(IdMovie);
      return movieObject ? { status: 200, data: movieObject } : { status: 404, data: undefined };
    } catch (error) {
      console.log(error);
      throw new Error('Error while trying to get Movies');
    }
  }

}
module.exports = new MoviesController();
module.exports.MoviesConstructor = MoviesController;
