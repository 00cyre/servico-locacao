const BaseController = require('../../shared/baseController');
const HistorysConstructor = require('../History/historyController');
const { RentalModel } = require('./index');
const { HistoryModel } = require('../History/historyModel')
const { MoviesModel } = require('../Movies/moviesModel')
const _ = require('lodash');
const HttpStatus = require('../shared/httpStatus')
class RentalController {
  constructor() {
    this.baseController = new BaseController(RentalModel);
    this.httpStatus = new HttpStatus('Rentals')
    this.historyController = new BaseController(HistoryModel);
    this.movieController = new BaseController(MoviesModel);
  }

  async insertRental(rentalObj) {
    try {
      let isMovieAvailable = await this.movieController.getById(rentalObj.MovieId);

      let rentalQuantity = await this.historyController.getByFilter({ where: { UserId: rentalObj.UserId } });
      if (!isMovieAvailable.Quantidade > 0) {
        throw new Error('This movie is not available');
      }
      if (rentalQuantity.length < 5) {
        let rentalObject = await this.baseController.insert(rentalObj);
        await this.movieController.update('Id',rentalObj.MovieId,{Quantidade:isMovieAvailable.Quantidade - 1})
        let historyObject = await this.historyController.insert({ RentId: rentalObject.Id, MovieId: rentalObj.MovieId, UserId: rentalObj.UserId, DateRent: null })
        console.log(historyObject);
        return this.httpStatus.insertEntry(rentalObject, true);
      }
      throw new Error('This user has already rented 5 movies');

    } catch (error) {
      throw this.httpStatus.insertEntry(error, false)
    }
  }

  async updateRental(id, rentalObj) {
    try {
      let isDeleted = await this.baseController.getById(id);
      if (isDeleted) {
        let rentalObject = await this.baseController.update('Id', id, rentalObj);
        return this.httpStatus.updateEntry(rentalObject, true);
      }
      throw new Error("Not Found")
    } catch (error) {
      throw this.httpStatus.updateEntry(error, false)
    }
  }
  async getRentalById(idRental) {
    try {
      let rentalObject = await this.baseController.getById(idRental);
      return this.httpStatus.getEntry(rentalObject, true)
    } catch (error) {
      throw this.httpStatus.getEntry(error, false)
    }
  }
  async deleteRentalById(idRental) {
    try {
      let rentalInfo = await this.baseController.getById(idRental);
      let historyInfo = await this.historyController.getByFilter({ where: { RentId: idRental } })
      let isMovieAvailable = await this.movieController.getById(historyInfo[0].MovieId);
      let historyObject = await this.historyController.update("Id", historyInfo[0].Id, { MovieId: historyInfo[0].MovieId, UserId: historyInfo[0].UserId, DateRent: new Date() })
      await this.movieController.update('Id',historyInfo[0].MovieId,{Quantidade:isMovieAvailable.Quantidade + 1})
      let rentalObject = await this.baseController.delete(idRental);
      return this.httpStatus.deleteEntry(rentalObject, true);
    } catch (error) {
      throw this.httpStatus.deleteEntry(error, false)
    }
  }


}
module.exports = new RentalController();
module.exports.RentalsConstructor = RentalController;
