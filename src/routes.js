const express = require('express');

const productsCtrl = require('./controllers/products');
const c = require('./config/constants')

const routes = express.Router();

routes.get(c.routes.products, productsCtrl.index)

module.exports = routes;
