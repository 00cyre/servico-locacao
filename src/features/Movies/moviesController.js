const BaseController = require('../../shared/baseController');
const { MoviesModel } = require('./index');
const _ = require('lodash');
const HttpStatus = require('../shared/httpStatus')
class MoviesController {
  constructor() {

    this.baseController = new BaseController(MoviesModel);
    this.httpStatus = new HttpStatus('Movies');
  }
  async insertMovie(movieObj) {
    try {
      let movieObject = await this.baseController.insert(movieObj);
      return this.httpStatus.insertEntry(movieObject, true);
    } catch (error) {
      throw this.httpStatus.insertEntry(error, false)
    }
  }
  async updateMovie(id, movieObj) {
    try {
      let isDeleted = await this.baseController.getById(id);
      if(isDeleted)
      {
        let movieObject = await this.baseController.update('Id', id, movieObj);
        return this.httpStatus.updateEntry(movieObject, true);
      }
      throw new Error("Not Found")
    } catch (error) {
      throw this.httpStatus.updateEntry(error, false)
    }
  }
  async getMovieById(idMovie) {
    try {
      let movieObject = await this.baseController.getById(idMovie);
      return this.httpStatus.getEntry(movieObject,true)
    } catch (error) {
      throw this.httpStatus.getEntry(error,false)
    }
  }
  async deleteMovieById(idMovie) {
    try {
      let movieObject = await this.baseController.delete(idMovie);
      return this.httpStatus.deleteEntry(movieObject, true);
    } catch (error) {
      throw this.httpStatus.deleteEntry(error, false)
    }
  }


}
module.exports = new MoviesController();
module.exports.MoviesConstructor = MoviesController;
