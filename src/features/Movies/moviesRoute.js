const express = require('express');
const _ = require('lodash');
const moviesController = require('./moviesController');
const {validateBodyMovie} = require('./moviesMiddleware')
class MoviesRoute {
  constructor() {
    this.moviesRoute = express.Router({ mergeParams: true });
    this.routes();
  }

  async getMovieById(req, res) {
    try {
      const response = await moviesController.getMovieById(req.params.idMovie);
      res.status(response.status).json(response.data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  async updateMovie(req,res)
  {
    try {
        let response = await moviesController.updateMovie(req.params.idMovie,req.body)
        res.status(response.status).json(response.data);

    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  async deleteMovieById(req,res){
    try {
      let response = await moviesController.deleteMovieById(req.params.idMovie)
      res.status(response.status).json(response.data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
async insertMovie(req,res)
{
  try {
    let response = await moviesController.insertMovie(req.body)
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
    
  }
}
  routes() {
    console.log('chegou')
    this.moviesRoute.get('/api/v1/movies/:idMovie', this.getMovieById);
    this.moviesRoute.delete('/api/v1/movies/:idMovie',this.deleteMovieById)
    this.moviesRoute.put('/api/v1/movies/:idMovie',validateBodyMovie,this.updateMovie)
    this.moviesRoute.post('/api/v1/movies',validateBodyMovie,this.insertMovie)

  }
}

module.exports = new MoviesRoute();