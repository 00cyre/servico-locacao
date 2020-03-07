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
      const resposta = await moviesController.getMovieById(req.params.IdMovie);
      res.status(resposta.status).json(resposta.data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }


  routes() {
    console.log('chegou')
    this.moviesRoute.get('/api/v1/movies/:IdMovie', this.getMovieById);
  }
}

module.exports = new MoviesRoute();