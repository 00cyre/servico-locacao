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
  

  async update(idFieldName, id, changeObj,  transaction = null) {
    try {
      await this.referenceModel.update(
        { ...changeObj },
        transaction
          ? {
              where: { [idFieldName]: id },
              transaction,
              validate: true,
              individualHooks: true
            }
          : {
              where: { [idFieldName]: id }
            }
      );
      return await this.getById(id);
    } catch (error) {
      throw new Error('Error update() - baseController');
    }
   }

  async delete(idMovie) {
    try {
      let res = await this.referenceModel.destroy(
        {
          where:{
            Id: idMovie
          }
        }
      );
      return res
    } catch (error) {
      throw new Error('Erro exclui() - baseController');
    }
  }
}

module.exports = BaseController;
