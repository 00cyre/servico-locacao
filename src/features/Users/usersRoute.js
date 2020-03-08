const express = require('express');
const _ = require('lodash');
const usersController = require('./usersController');
const {validateBodyUser} = require('./usersMiddleware')
class UsersRoute {
  constructor() {
    this.usersRoute = express.Router({ mergeParams: true });
    this.routes();
  }

  async getUserById(req, res) {
    try {
      const response = await usersController.getUserById(req.params.idUser);
      res.status(response.status).json(response.data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  async updateUser(req,res)
  {
    try {
        let response = await usersController.updateUser(req.params.idUser,req.body)
        res.status(response.status).json(response.data);

    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  async deleteUserById(req,res){
    try {
      let response = await usersController.deleteUserById(req.params.idUser)
      res.status(response.status).json(response.data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
async insertUser(req,res)
{
  try {
    let response = await usersController.insertUser(req.body)
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
    
  }
}
  routes() {
    this.usersRoute.get('/api/v1/users/:idUser', this.getUserById);
    this.usersRoute.delete('/api/v1/users/:idUser',this.deleteUserById)
    this.usersRoute.put('/api/v1/users/:idUser',validateBodyUser,this.updateUser)
    this.usersRoute.post('/api/v1/users',validateBodyUser,this.insertUser)

  }
}

module.exports = new UsersRoute();