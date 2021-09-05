"use strict";

var express = require('express');

var morgan = require('morgan');

var swaggerUi = require('swagger-ui-express');

var swaggerDocument = require('./docs/basicInfo'); //Import Routes


var productRoutes = require('./routes/product');

var saleRoutes = require('./routes/sale'); //Initialization


var app = express(); //Middleware

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
})); //Routes

app.use('/api/products', productRoutes);
app.use('/api/sales', saleRoutes); //export default app;

module.exports = app;