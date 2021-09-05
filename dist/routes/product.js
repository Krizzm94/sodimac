"use strict";

var _require = require('express'),
    Router = _require.Router;

var _require2 = require('../controllers/product.controller'),
    CreateProduct = _require2.CreateProduct,
    GetProducts = _require2.GetProducts,
    GetProduct = _require2.GetProduct,
    DeleteProduct = _require2.DeleteProduct,
    UpdateProduct = _require2.UpdateProduct;

var router = Router();
router.post('/', CreateProduct);
router.get('/', GetProducts);
router.get('/:id', GetProduct);
router["delete"]('/:id', DeleteProduct);
router.put('/:id', UpdateProduct);
module.exports = router;