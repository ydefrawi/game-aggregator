import Sequelize from 'sequelize';
const { Model, DataTypes }=Sequelize;
import {sequelize} from '../config/connection.js';

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
                model: 'users',
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

export default Favorites;
