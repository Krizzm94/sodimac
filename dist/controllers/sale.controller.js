"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetSales = GetSales;
exports.GetSale = GetSale;
exports.GetSalesByProduct = GetSalesByProduct;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Sale = require('../models/Sale');
/**
* Get a list of sales from the store 
* @req  {HttpRequest} Request received from the client 
* @res  {HttpResponse} Reply send to client 
* @Response  {HttpResponse}
*/


function GetSales(_x, _x2) {
  return _GetSales.apply(this, arguments);
}
/**
* Get a specific sale from the store 
* @req  {HttpRequest} Request received from the client 
* @res  {HttpResponse} Reply send to client 
* @Response  {HttpResponse}
*/


function _GetSales() {
  _GetSales = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var sales;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return Sale.findAll({
              attributes: ['idsale', 'idproduct', 'datepurchase']
            });

          case 3:
            sales = _context.sent;
            return _context.abrupt("return", res.json({
              data: sales,
              count: sales.length
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
  return _GetSales.apply(this, arguments);
}

function GetSale(_x3, _x4) {
  return _GetSale.apply(this, arguments);
}
/**
* Get a list of sales specific by a product from the store 
* @req  {HttpRequest} Request received from the client 
* @res  {HttpResponse} Reply send to client 
* @Response  {HttpResponse}
* @author Cristhian Camilo Medina Solano
*/


function _GetSale() {
  _GetSale = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, sale;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            _context2.next = 4;
            return Sale.findOne({
              where: {
                idsale: id
              },
              attributes: ['idsale', 'idproduct', 'datepurchase']
            });

          case 4:
            sale = _context2.sent;

            if (!sale) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return", res.json({
              data: sale
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
  return _GetSale.apply(this, arguments);
}

function GetSalesByProduct(_x5, _x6) {
  return _GetSalesByProduct.apply(this, arguments);
}

function _GetSalesByProduct() {
  _GetSalesByProduct = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, sales;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return Sale.findAll({
              where: {
                idproduct: id
              },
              attributes: ['idsale', 'idproduct', 'datepurchase']
            });

          case 4:
            sales = _context3.sent;

            if (!(sales.length > 0)) {
              _context3.next = 9;
              break;
            }

            return _context3.abrupt("return", res.json({
              data: sales,
              count: sales.length
            }));

          case 9:
            res.status(404).json({
              message: 'Not Found',
              data: {}
            });

          case 10:
            _context3.next = 16;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.status(500).json({
              message: 'Something goes wrong',
              data: {}
            });

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 12]]);
  }));
  return _GetSalesByProduct.apply(this, arguments);
}