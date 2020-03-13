const BaseController = require('../../shared/baseController');
const { UsersModel } = require('./index');
const _ = require('lodash');
const HttpStatus = require('../../shared/httpStatus')
class UsersController {
  constructor() {
    this.baseController = new BaseController(UsersModel);
    this.httpStatus = new HttpStatus('Users')
  }
  async insertUser(userObj) {
    try {
      let userObject = await this.baseController.insert(userObj);
      return this.httpStatus.insertEntry(userObject, true);
    } catch (error) {
      throw this.httpStatus.insertEntry(error, false)
    }
  }
  async updateUser(id, userObj) {
    try {
      let isDeleted = await this.baseController.getById(id);
      if(isDeleted)
      {
        let userObject = await this.baseController.update('Id', id, userObj);
        return this.httpStatus.updateEntry(userObject, true);
      }
      throw new Error("Not Found")
    } catch (error) {
      throw this.httpStatus.updateEntry(error, false)
    }
  }
  async getUserById(idUser) {
    try {
      let userObject = await this.baseController.getById(idUser);
      return this.httpStatus.getEntry(userObject,true)
    } catch (error) {
      throw this.httpStatus.getEntry(error,false)
    }
  }
  async deleteUserById(idUser) {
    try {
      let userObject = await this.baseController.delete(idUser);
      return this.httpStatus.deleteEntry(userObject, true);
    } catch (error) {
      throw this.httpStatus.deleteEntry(error, false)
    }
  }


}
module.exports = new UsersController();
module.exports.UsersConstructor = UsersController;
