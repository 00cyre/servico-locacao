const BaseController = require('../../shared/baseController');
const { MoviesModel } = require('./index');
const _ = require('lodash');
const { insertEntry,
  updateEntry,
  getEntry,
  deleteEntry } = require('../shared/httpStatus')
class MoviesController {
  constructor() {
    this.baseController = new BaseController(MoviesModel);
  }
  async insertMovie(movieObj) {
    try {
      let movieObject = await this.baseController.insert(movieObj);
      return insertEntry(movieObject, true);
    } catch (error) {
      throw insertEntry(error, false)
    }
  }
  async updateMovie(id, movieObj) {
    try {
      let isDeleted = await this.baseController.getById(id);
      if(isDeleted)
      {
        let movieObject = await this.baseController.update('Id', id, movieObj);
        return updateEntry(movieObject, true);
      }
      throw new Error("Not Found")
    } catch (error) {
      throw updateEntry(error, false)
    }
  }
  async getMovieById(idMovie) {
    try {
      let movieObject = await this.baseController.getById(idMovie);
      return getEntry(movieObject,true)
    } catch (error) {
      throw getEntry(error,false)
    }
  }
  async deleteMovieById(idMovie) {
    try {
      let movieObject = await this.baseController.delete(idMovie);
      return deleteEntry(movieObject, true);
    } catch (error) {
      throw deleteEntry(error, false)
    }
  }


}
module.exports = new MoviesController();
module.exports.MoviesConstructor = MoviesController;
