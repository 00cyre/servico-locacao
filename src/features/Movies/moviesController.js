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
  async getMovieById(idMovie) {
    try {
      const movieObject = await this.baseController.getById(idMovie);
      return movieObject ? { status: 200, data: movieObject } : { status: 404, data: undefined };
    } catch (error) {
      throw new Error('Error while trying to get Movies');
    }
  }
  async deleteMovieById(idMovie)
  {
    try {
      await this.baseController.delete(idMovie);
      return true;
    } catch (error) {
      throw new Error('Error while trying to delete Movies');
    }
  }

}
module.exports = new MoviesController();
module.exports.MoviesConstructor = MoviesController;
