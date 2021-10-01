const express = require('express');
const routes = express.Router();

const estadosController = require('../controllers/estados-controller');

routes.route('/')
    .get(estadosController.index)
    .post(estadosController.create);

routes.route('/:id')
    .get(estadosController.show)
    .put(estadosController.update)
    .delete(estadosController.delete);

module.exports = routes;