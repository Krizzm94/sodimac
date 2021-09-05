const express = require('express');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/basicInfo');


//Import Routes
const productRoutes = require('./routes/product');
const saleRoutes = require('./routes/sale');

//Initialization
const app = express();

//Middleware
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded(
    { extended: false })
);

//Routes
app.use('/api/products', productRoutes);
app.use('/api/sales', saleRoutes);

//export default app;
module.exports = app;
