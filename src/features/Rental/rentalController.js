const BaseController = require('../../shared/baseController');
const { RentalModel } = require('./index');
const _ = require('lodash');
const HttpStatus = require('../shared/httpStatus')
class RentalController {
  constructor() {
    this.baseController = new BaseController(RentalModel);
    this.httpStatus = new HttpStatus('Rentals')
  }
  async insertRental(rentalObj) {
    try {
      let rentalObject = await this.baseController.insert(rentalObj);
      return this.httpStatus.insertEntry(rentalObject, true);
    } catch (error) {
      throw this.httpStatus.insertEntry(error, false)
    }
  }
  async updateRental(id, rentalObj) {
    try {
      let isDeleted = await this.baseController.getById(id);
      if(isDeleted)
      {
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
      return this.httpStatus.getEntry(rentalObject,true)
    } catch (error) {
      throw this.httpStatus.getEntry(error,false)
    }
  }
  async deleteRentalById(idRental) {
    try {
      let rentalObject = await this.baseController.delete(idRental);
      return this.httpStatus.deleteEntry(rentalObject, true);
    } catch (error) {
      throw this.httpStatus.deleteEntry(error, false)
    }
  }


}
module.exports = new RentalController();
module.exports.RentalsConstructor = RentalController;
