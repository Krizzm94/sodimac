const { Router } = require('express');
const { GetSales, GetSale, GetSalesByProduct } = require('../controllers/sale.controller');
const router = Router();

router.get('/', GetSales);
router.get('/:id', GetSale);
router.get('/product/:id', GetSalesByProduct);


module.exports = router;