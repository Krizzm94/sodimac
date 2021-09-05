"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres', 'postgres', 'ingis2010ccmS', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000
  },
  loggin: false
});
exports.sequelize = sequelize;