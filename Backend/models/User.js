import Sequelize from 'sequelize';
const { Model, DataTypes }=Sequelize;
import {sequelize} from '../config/connection.js';

class User extends Model {}

//takes in 2 arguments, fields and options
User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		firstName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false
		},
		firebaseId: {
			type: DataTypes.STRING,
			allowNull: true
		}
	},
	{
		sequelize,
		timestamps: false,
		modelName: 'user'
	}
);

export default User;
