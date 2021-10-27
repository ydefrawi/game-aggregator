const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Games extends Model {}

//takes in 2 arguments, fields and options
Games.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: false
		},
        name:{
            type: DataTypes.STRING,
            allowNull:false,
        }
		
	},
	{
		sequelize,
		timestamps: false,
		modelName: 'games'
	}
);

module.exports = Games;
