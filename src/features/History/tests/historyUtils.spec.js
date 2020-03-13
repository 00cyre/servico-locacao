const historyUtils = require('../historyUtils');
const { MoviesModel } = require('../../Movies/moviesModel');
const { UsersModel } = require('../../Users/usersModel');
const BaseController = require('../../../shared/baseController');

describe('historyUtil Spec', () => {
    beforeEach(() => {
        historyUtils.userController = new BaseController(UsersModel);
        historyUtils.movieController = new BaseController(MoviesModel);
    });
    it('Should test Formatter', async () => {
        historyUtils.movieController.getById = jest.fn(()=>{return {Nome:'filme'}});
        historyUtils.userController.getById = jest.fn(()=>{return {Nome:'pedro'}});
        let param = [{createdAt:'03-22-2018'}];
        let res = await historyUtils.historyResponseFormatter(param);
        expect(res[0]).toEqual('O filme filme foi alugado por pedro no dia 22/03/2018')
    });
});