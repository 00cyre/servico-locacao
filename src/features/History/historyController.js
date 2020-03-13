const BaseController = require('../../shared/baseController');
const { HistoryModel } = require('./index');
const _ = require('lodash');
const HttpStatus = require('../shared/httpStatus')
const HistoryUtil = require('./historyUtils');
class HistoryController {
  constructor() {
    this.baseController = new BaseController(HistoryModel);
    this.httpStatus = new HttpStatus('Histories')
  }
  async insertHistory(historyObj) {
    try {
      let historyObject = await this.baseController.insert(historyObj);
      return this.httpStatus.insertEntry(historyObject, true);
    } catch (error) {
      throw this.httpStatus.insertEntry(error, false)
    }
  }
  async updateHistory(id, historyObj) {
    try {
      let isDeleted = await this.baseController.getById(id);
      if (isDeleted) {
        let historyObject = await this.baseController.update('Id', id, historyObj);
        return this.httpStatus.updateEntry(historyObject, true);
      }
      throw new Error("Not Found")
    } catch (error) {
      throw this.httpStatus.updateEntry(error, false)
    }
  }
  async getHistoryById(idHistory) {
    try {
      let historyObject = await this.baseController.getById(idHistory);
      return this.httpStatus.getEntry(historyObject, true)
    } catch (error) {
      throw this.httpStatus.getEntry(error, false)
    }
  }
  async getHistoryByQuery(query) {
    try {
      let historyObject = await this.baseController.getByFilter(query);
      let formattedResp = await HistoryUtil.historyResponseFormatter(historyObject);
      return this.httpStatus.getEntry(formattedResp, true)
    } catch (error) {
      throw this.httpStatus.getEntry(error, false)
    }
  }
  async deleteHistoryById(idHistory) {
    try {
      let historyObject = await this.baseController.delete(idHistory);
      return this.httpStatus.deleteEntry(historyObject, true);
    } catch (error) {
      throw this.httpStatus.deleteEntry(error, false)
    }
  }


}
module.exports = new HistoryController();
module.exports.HistorysConstructor = HistoryController;
