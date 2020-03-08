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
      throw new Error(error);
    }
  }
  async getById(id, options = {}) {
    try {
      return await this.referenceModel.findByPk(Number(id), {
        ...options
      });
    } catch (error) {
      throw new Error(error);
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
      throw new Error(error);
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
      throw new Error(error);
    }
  }
}

module.exports = BaseController;
