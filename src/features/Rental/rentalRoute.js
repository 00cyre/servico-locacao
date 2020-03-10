const express = require('express');
const _ = require('lodash');
const rentalController = require('./rentalController');
const {validateBodyRental} = require('./rentalMiddleware')
class RentalRoute {
  constructor() {
    this.rentalRoute = express.Router({ mergeParams: true });
    this.routes();
  }

  async getRentalById(req, res) {
    try {
      const response = await rentalController.getRentalById(req.params.idRental);
      res.status(response.status).json(response.data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  async updateRental(req,res)
  {
    try {
        let response = await rentalController.updateRental(req.params.idRental,req.body)
        res.status(response.status).json(response.data);

    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  async deleteRentalById(req,res){
    try {
      let response = await rentalController.deleteRentalById(req.params.idRental)
      res.status(response.status).json(response.data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
async insertRental(req,res)
{
  try {
    let response = await rentalController.insertRental(req.body)
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
    
  }
}
  routes() {
    this.rentalRoute.get('/api/v1/rental/:idRental', this.getRentalById);
    this.rentalRoute.delete('/api/v1/rental/:idRental',this.deleteRentalById)
    this.rentalRoute.put('/api/v1/rental/:idRental',validateBodyRental,this.updateRental)
    this.rentalRoute.post('/api/v1/rental',validateBodyRental,this.insertRental)

  }
}

module.exports = new RentalRoute();