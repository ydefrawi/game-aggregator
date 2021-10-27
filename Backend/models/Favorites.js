const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Favorites extends Model {}

//takes in 2 arguments, fields and options
Favorites.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		game_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
            references: {
                model: 'games',
                key: 'id',
              },
		},
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
            references: {
                model: 'user',
                key: 'id',
              },
		}
	},
	{
		sequelize,
		timestamps: false,
		modelName: 'favorites'
	}
);

module.exports = Favorites;
