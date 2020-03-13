const _ = require('lodash')
const moment = require('moment');
const { MoviesModel } = require('../Movies/moviesModel');
const { UsersModel } = require('../Users/usersModel');
const BaseController = require('../../shared/baseController');

class HistoryUtil {
    constructor() {
        this.userController = new BaseController(UsersModel);
        this.movieController = new BaseController(MoviesModel);
    }
    async historyResponseFormatter(res) {
        let arrResp = new Array();
        for (let index = 0; index < res.length; index++) {
            const e = res[index];
            let userObject = await this.userController.getById(e.UserId);
            let moviesObject = await this.movieController.getById(e.MovieId);
            let resp = `O filme ${moviesObject.Nome} foi alugado por ${userObject.Nome} no dia ${moment(e.createdAt).format('DD/MM/YYYY')}`
            arrResp.push(resp)
        }
        return arrResp
    }

}
module.exports = new HistoryUtil() 