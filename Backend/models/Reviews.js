import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { Model, DataTypes }=require('sequelize');
import sequelize from '../config/connection.js';

class Reviews extends Model {}

//takes in 2 arguments, fields and options
Reviews.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
        game_id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            references: {
                model: 'games',
                key: 'id',
              },
        },
        review:{
            type: DataTypes.STRING(1000),
            allowNull:false,
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            references: {
                model: 'users',
                key: 'id',
              },
        },
		
	},
	{
		sequelize,
		timestamps: false,
		modelName: 'reviews'
	}
);

export default Reviews;
