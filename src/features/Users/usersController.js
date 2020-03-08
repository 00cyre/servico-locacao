const BaseController = require('../../shared/baseController');
const { UsersModel } = require('./index');
const _ = require('lodash');
const { insertEntry,
  updateEntry,
  getEntry,
  deleteEntry } = require('../shared/httpStatus')
class UsersController {
  constructor() {
    this.baseController = new BaseController(UsersModel);
  }
  async insertUser(userObj) {
    try {
      let userObject = await this.baseController.insert(userObj);
      return insertEntry(userObject, true);
    } catch (error) {
      throw insertEntry(error, false)
    }
  }
  async updateUser(id, userObj) {
    try {
      let isDeleted = await this.baseController.getById(id);
      if(isDeleted)
      {
        let userObject = await this.baseController.update('Id', id, userObj);
        return updateEntry(userObject, true);
      }
      throw new Error("Not Found")
    } catch (error) {
      throw updateEntry(error, false)
    }
  }
  async getUserById(idUser) {
    try {
      let userObject = await this.baseController.getById(idUser);
      return getEntry(userObject,true)
    } catch (error) {
      throw getEntry(error,false)
    }
  }
  async deleteUserById(idUser) {
    try {
      let userObject = await this.baseController.delete(idUser);
      return deleteEntry(userObject, true);
    } catch (error) {
      throw deleteEntry(error, false)
    }
  }


}
module.exports = new UsersController();
module.exports.UsersConstructor = UsersController;
