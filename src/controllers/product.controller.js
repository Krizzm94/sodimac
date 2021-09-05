const Product = require('../models/Product');

 /**
 * Get a list of products from the store 
 * @req  {HttpRequest} Request received from the client 
 * @res  {HttpResponse} Reply send to client 
 * @Response  {HttpResponse}
 */
export async function GetProducts(req, res) {
    try {
        const products = await Product.findAll();
        return res.json({
            data: products,
            count: products.length
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
 * Get specific product from the store 
 * @req  {HttpRequest} Request received from the client 
 * @res  {HttpResponse} Reply send to client 
 * @Response  {HttpResponse}
 */
export async function GetProduct(req, res) {
    try {
        const { id } = req.params;
        const product = await Product.findOne({
            where: {
                idproduct: id
            }
        });
        if (product) {
            return res.json({
                data: product
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
 * Insert a new product in the database  
 * @req  {HttpRequest} Request received from the client 
 * @res  {HttpResponse} Reply send to client 
 * @Response  {HttpResponse}
 */
export async function CreateProduct(req, res) {
    console.log(req.body);
    const { name, description, stock } = req.body;
    try {
        let newProduct = await Product.create({
            name,
            description,
            stock
        }, {
            fields: ['name', 'description', 'stock']
        });
        if (newProduct) {
            return res.json({
                message: 'Product created succesfully',
                data: newProduct
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
 * Delete an existing product in the database 
 * @req  {HttpRequest} Request received from the client 
 * @res  {HttpResponse} Reply send to client 
 * @Response  {HttpResponse}
 */
export async function DeleteProduct(req, res) {
    try {
        const { id } = req.params;
        const productFound = await Product.findOne({
            where: {
                idproduct: id
            }
        });
        if (productFound) {
            const deleteRowCount = await Product.destroy({
                where: {
                    idproduct: id
                }
            });
            return res.json({
                message: 'Project Deleted Succesfully',
                count: deleteRowCount
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
 * Update an existing product in the database 
 * @req  {HttpRequest} Request received from the client 
 * @res  {HttpResponse} Reply send to client 
 * @Response  {HttpResponse}
 */
export async function UpdateProduct(req, res) {
    try {
        const { id } = req.params;
        const { name, description, stock } = req.body;

        const productFound = await Product.findOne({
            where: {
                idproduct: id
            }
        });
        if (productFound) {
            const product = await Product.update({
                name,
                description,
                stock
            }, {
                where: {
                    idproduct: id
                }
            });
            return res.json({
                data: {
                    idProduct: id,
                    name,
                    description,
                    stock
                }
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
