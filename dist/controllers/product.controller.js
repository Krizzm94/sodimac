"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetProducts = GetProducts;
exports.GetProduct = GetProduct;
exports.CreateProduct = CreateProduct;
exports.DeleteProduct = DeleteProduct;
exports.UpdateProduct = UpdateProduct;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Product = require('../models/Product');
/**
* Get a list of products from the store 
* @req  {HttpRequest} Request received from the client 
* @res  {HttpResponse} Reply send to client 
* @Response  {HttpResponse}
*/


function GetProducts(_x, _x2) {
  return _GetProducts.apply(this, arguments);
}
/**
* Get specific product from the store 
* @req  {HttpRequest} Request received from the client 
* @res  {HttpResponse} Reply send to client 
* @Response  {HttpResponse}
*/


function _GetProducts() {
  _GetProducts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var products;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return Product.findAll();

          case 3:
            products = _context.sent;
            return _context.abrupt("return", res.json({
              data: products,
              count: products.length
            }));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              message: 'Something goes wrong',
              data: {}
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _GetProducts.apply(this, arguments);
}

function GetProduct(_x3, _x4) {
  return _GetProduct.apply(this, arguments);
}
/**
* Insert a new product in the database  
* @req  {HttpRequest} Request received from the client 
* @res  {HttpResponse} Reply send to client 
* @Response  {HttpResponse}
*/


function _GetProduct() {
  _GetProduct = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, product;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            _context2.next = 4;
            return Product.findOne({
              where: {
                idproduct: id
              }
            });

          case 4:
            product = _context2.sent;

            if (!product) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return", res.json({
              data: product
            }));

          case 9:
            res.status(404).json({
              message: 'Not Found',
              data: {}
            });

          case 10:
            _context2.next = 16;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(500).json({
              message: 'Something goes wrong',
              data: {}
            });

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 12]]);
  }));
  return _GetProduct.apply(this, arguments);
}

function CreateProduct(_x5, _x6) {
  return _CreateProduct.apply(this, arguments);
}
/**
* Delete an existing product in the database 
* @req  {HttpRequest} Request received from the client 
* @res  {HttpResponse} Reply send to client 
* @Response  {HttpResponse}
*/


function _CreateProduct() {
  _CreateProduct = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, name, description, stock, newProduct;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log(req.body);
            _req$body = req.body, name = _req$body.name, description = _req$body.description, stock = _req$body.stock;
            _context3.prev = 2;
            _context3.next = 5;
            return Product.create({
              name: name,
              description: description,
              stock: stock
            }, {
              fields: ['name', 'description', 'stock']
            });

          case 5:
            newProduct = _context3.sent;

            if (!newProduct) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", res.json({
              message: 'Product created succesfully',
              data: newProduct
            }));

          case 8:
            _context3.next = 14;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](2);
            console.log(_context3.t0);
            res.status(500).json({
              message: 'Something goes wrong',
              data: {}
            });

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 10]]);
  }));
  return _CreateProduct.apply(this, arguments);
}

function DeleteProduct(_x7, _x8) {
  return _DeleteProduct.apply(this, arguments);
}
/**
* Update an existing product in the database 
* @req  {HttpRequest} Request received from the client 
* @res  {HttpResponse} Reply send to client 
* @Response  {HttpResponse}
*/


function _DeleteProduct() {
  _DeleteProduct = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, productFound, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return Product.findOne({
              where: {
                idproduct: id
              }
            });

          case 4:
            productFound = _context4.sent;

            if (!productFound) {
              _context4.next = 12;
              break;
            }

            _context4.next = 8;
            return Product.destroy({
              where: {
                idproduct: id
              }
            });

          case 8:
            deleteRowCount = _context4.sent;
            return _context4.abrupt("return", res.json({
              message: 'Project Deleted Succesfully',
              count: deleteRowCount
            }));

          case 12:
            res.status(404).json({
              message: 'Not Found',
              data: {}
            });

          case 13:
            _context4.next = 19;
            break;

          case 15:
            _context4.prev = 15;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.status(500).json({
              message: 'Something goes wrong',
              data: {}
            });

          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 15]]);
  }));
  return _DeleteProduct.apply(this, arguments);
}

function UpdateProduct(_x9, _x10) {
  return _UpdateProduct.apply(this, arguments);
}

function _UpdateProduct() {
  _UpdateProduct = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, name, description, stock, productFound, product;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, description = _req$body2.description, stock = _req$body2.stock;
            _context5.next = 5;
            return Product.findOne({
              where: {
                idproduct: id
              }
            });

          case 5:
            productFound = _context5.sent;

            if (!productFound) {
              _context5.next = 13;
              break;
            }

            _context5.next = 9;
            return Product.update({
              name: name,
              description: description,
              stock: stock
            }, {
              where: {
                idproduct: id
              }
            });

          case 9:
            product = _context5.sent;
            return _context5.abrupt("return", res.json({
              data: {
                idProduct: id,
                name: name,
                description: description,
                stock: stock
              }
            }));

          case 13:
            res.status(404).json({
              message: 'Not Found',
              data: {}
            });

          case 14:
            _context5.next = 20;
            break;

          case 16:
            _context5.prev = 16;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.status(500).json({
              message: 'Something goes wrong',
              data: {}
            });

          case 20:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 16]]);
  }));
  return _UpdateProduct.apply(this, arguments);
}