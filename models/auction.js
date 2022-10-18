const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Auction extends Model { }

Auction.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        car_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'car',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        sale_date: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW
        },
        // active boolean for auction data default true 
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        starting_bid: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },

    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'auction'
    }
);

module.exports = Auction;
