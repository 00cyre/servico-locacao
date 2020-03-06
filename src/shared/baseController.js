const _ = require('lodash');

class BaseController {
  constructor(modelReferencia) {
    this.modelReferencia = modelReferencia;
  }

  setModelReferencia(model) {
    this.modelReferencia = model;
  }

  async insere(objetoInserir, transaction = null) {
      
  }
  async retornaPeloId(id, options = {}) {
  }

  async retornaPorFiltro(filter) {
  }     
  

  async atualiza(nomeCampoId, id, objetoAlterar,  transaction = null) {
   }

  async exclui(queryExcluir, transaction = null) {
  }
}

module.exports = BaseController;
