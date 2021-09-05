const { Router } = require('express');
const { CreateProduct, GetProducts, GetProduct, DeleteProduct, UpdateProduct } = require('../controllers/product.controller');
const router = Router();

router.post('/', CreateProduct);
router.get('/', GetProducts);
router.get('/:id', GetProduct);
router.delete('/:id', DeleteProduct);
router.put('/:id', UpdateProduct);

module.exports = router;