const { Router } = require('express');

const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router();

//Rota|Funçaõ com Parametros

routes.get('/devs', DevController.index);
routes.post('/devs', SearchController.index);

routes.get('/search',)
module.exports = routes;