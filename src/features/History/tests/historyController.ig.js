const historyUtils = require('../historyUtils');
const { MoviesModel } = require('../../Movies/moviesModel');
const { HistoryModel } = require('../historyModel');
const { UsersModel } = require('../../Users/usersModel');
const BaseController = require('../../../shared/baseController');
const HistoryController = require('../historyController');
describe('historyUtil Spec', () => {
    beforeEach(() => {
        HistoryController.baseController = new BaseController(HistoryModel);
    });
});