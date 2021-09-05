"use strict";

var Sequelize = require('sequelize');

var _require = require('../persistence/database'),
    sequelize = _require.sequelize;

var Sale = sequelize.define('sales', {
  idsale: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  idproduct: {
    type: Sequelize.INTEGER
  },
  datepurchase: {
    type: Sequelize.DATE
  }
}, {
  timestamps: false
});
module.exports = Sale;