const Sale = require('../models/Sale');

 /**
 * Get a list of sales from the store 
 * @req  {HttpRequest} Request received from the client 
 * @res  {HttpResponse} Reply send to client 
 * @Response  {HttpResponse}
 */
export async function GetSales(req, res) {
    try {
        const sales = await Sale.findAll({
            attributes: ['idsale', 'idproduct', 'datepurchase']
        });
        return res.json({
            data: sales, 
            count: sales.length
        });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

 /**
 * Get a specific sale from the store 
 * @req  {HttpRequest} Request received from the client 
 * @res  {HttpResponse} Reply send to client 
 * @Response  {HttpResponse}
 */
export async function GetSale(req, res) {
    try {
        const { id } = req.params;
        const sale = await Sale.findOne({
            where: {
                idsale: id
            },
            attributes: ['idsale', 'idproduct', 'datepurchase']
        });
        if (sale) {
            return res.json({
                data: sale
            });
        }
        else {
            res.status(404).json({
                message: 'Not Found',
                data: {}
            });
        }
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

 /**
 * Get a list of sales specific by a product from the store 
 * @req  {HttpRequest} Request received from the client 
 * @res  {HttpResponse} Reply send to client 
 * @Response  {HttpResponse}
 * @author Cristhian Camilo Medina Solano
 */
export async function GetSalesByProduct(req, res) {
    try {
        const { id } = req.params;
        const sales = await Sale.findAll({
            where: {
                idproduct: id
            },
            attributes: ['idsale', 'idproduct', 'datepurchase']
        });
        if (sales.length > 0) {
            return res.json({
                data: sales,
                count: sales.length
            });
        }
        else {
            res.status(404).json({
                message: 'Not Found',
                data: {}
            });
        }
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}
