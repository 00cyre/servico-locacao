const express = require('express');
const _ = require('lodash');
const moviesController = require('./moviesController');
class MoviesRoute {
  constructor() {
    this.moviesRoute = express.Router({ mergeParams: true });
    this.routes();
  }

  async getMovieById(req, res) {
    try {
      const resposta = await moviesController.getMovieById(req.params.idMovie);
      res.status(resposta.status).json(resposta.data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  async deleteMovieById(req,res){
    try {
      await moviesController.deleteMovieById(req.params.idMovie)
      res.status(204).send('Entry Successfully deleted');
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  routes() {
    console.log('chegou')
    this.moviesRoute.get('/api/v1/movies/:idMovie', this.getMovieById);
    this.moviesRoute.delete('/api/v1/movies/:idMovie',this.deleteMovieById)
  }
}

module.exports = new MoviesRoute();