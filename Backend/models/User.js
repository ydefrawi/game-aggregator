import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { Model, DataTypes }=require('sequelize');
import sequelize from '../config/connection.js';

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
			allowNull: false
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		sequelize,
		timestamps: false,
		modelName: 'user'
	}
);

export default User;
