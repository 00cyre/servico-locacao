const _ = require('lodash');

class BaseController {
  constructor(referenceModel) {
    this.referenceModel = referenceModel;
  }

  async insert(objInsert, transaction = null) {
    try {
      return await this.referenceModel.create(
        {
          ...objInsert
        },
        transaction
      );
    } catch (error) {
      throw new Error('Error insert() - baseController');
    }
  }
  async getById(id, options = {}) {
    try {
      return await this.referenceModel.findByPk(Number(id), {
        ...options
      });
    } catch (error) {
      console.log(error);
      throw new Error('Error getById() - baseController');
    }
  }

  async getByFilter(filter) {
  }     
  

  async update(nomeCampoId, id, objetoAlterar,  transaction = null) {
   }

  async delete(queryExcluir, transaction = null) {
  }
}

module.exports = BaseController;
