const express = require('express');
const _ = require('lodash');
const historyController = require('./historyController');
const {validateBodyHistory} = require('./historyMiddleware')
class HistoryRoute {
  constructor() {
    this.historyRoute = express.Router({ mergeParams: true });
    this.routes();
  }

  async getHistoryById(req, res) {
    try {
      const response = await historyController.getHistoryById(req.params.idHistory);
      res.status(response.status).json(response.data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  async updateHistory(req,res)
  {
    try {
        let response = await historyController.updateHistory(req.params.idHistory,req.body)
        res.status(response.status).json(response.data);

    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  async deleteHistoryById(req,res){
    try {
      let response = await historyController.deleteHistoryById(req.params.idHistory)
      res.status(response.status).json(response.data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  async getHistoryByFilter(req,res)
  {
    try {
      const filter = req.query.filter ? JSON.parse(req.query.filter) : {};
      let filteredHistoryObject = await historyController.getHistoryByQuery(filter);
      res.status(filteredHistoryObject.status).json(filteredHistoryObject.data)
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
async insertHistory(req,res)
{
  try {
    let response = await historyController.insertHistory(req.body)
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
    
  }
}
  routes() {
    this.historyRoute.get('/api/v1/history/:idHistory', this.getHistoryById);
    this.historyRoute.get('/api/v1/history/', this.getHistoryByFilter);
    this.historyRoute.delete('/api/v1/history/:idHistory',this.deleteHistoryById)
    this.historyRoute.put('/api/v1/history/:idHistory',validateBodyHistory,this.updateHistory)
    this.historyRoute.post('/api/v1/history',validateBodyHistory,this.insertHistory)

  }
}

module.exports = new HistoryRoute();