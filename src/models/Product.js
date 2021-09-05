const Sequelize = require('sequelize');
const { sequelize } = require('../persistence/database');
const Sale = require('./Sale');

const Product = sequelize.define('products', {
    idproduct: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT,
    },
    description: {
        type: Sequelize.TEXT,
    },
    stock: {
        type: Sequelize.INTEGER,
    },
}, { timestamps: false });

Product.hasMany(Sale, { foreingKey: 'idproduct', sourceKey: 'idproduct' });
Sale.belongsTo(Product, { foreingKey: 'idproduct', sourceKey: 'idproduct' });

module.exports = Product;