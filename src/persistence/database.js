const Sequelize = require('sequelize');

export const sequelize = new Sequelize(
    'postgres',
    'postgres',
    'ingis2010ccmS',
    {
        host: 'localhost',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        loggin: false
    }
);