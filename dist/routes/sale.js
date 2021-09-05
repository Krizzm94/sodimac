"use strict";

var _require = require('express'),
    Router = _require.Router;

var _require2 = require('../controllers/sale.controller'),
    GetSales = _require2.GetSales,
    GetSale = _require2.GetSale,
    GetSalesByProduct = _require2.GetSalesByProduct;

var router = Router();
router.get('/', GetSales);
router.get('/:id', GetSale);
router.get('/product/:id', GetSalesByProduct);
module.exports = router;