import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { Model, DataTypes }=require('sequelize');
import sequelize from '../config/connection.js';

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

export default Games;
