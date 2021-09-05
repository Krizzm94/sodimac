const Sequelize = require('sequelize');
const { sequelize } = require('../persistence/database');

const Sale = sequelize.define('sales', {
    idsale: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    idproduct: {
        type: Sequelize.INTEGER
    },
    datepurchase: {
        type: Sequelize.DATE,
    },
}, { timestamps: false });

module.exports = Sale;
