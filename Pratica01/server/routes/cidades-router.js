const express = require('express');

//Instancio a rota do express
const routes = express.Router();

//Importo o productController
const cidadesController = require('../controllers/cidades-controller');

//Rotas raís (/)
routes.route('/')
    .get(cidadesController.index)       //Retorna todos os registro
    .post(cidadesController.create);    //Insere um registro

//Rotas identificadas por um ID
routes.route('/:id')
    .get(cidadesController.show)        //Retorna registro com o ID do parâmetro
    .put(cidadesController.update)      //Altera o registro com o ID do parâmetro
    .delete(cidadesController.delete);   //Exclui o registro com o ID do parâmetro

module.exports = routes;