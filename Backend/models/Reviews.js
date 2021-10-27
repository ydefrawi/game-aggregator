const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reviews extends Model {}

//takes in 2 arguments, fields and options
Reviews.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: false
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
            type: DataTypes.STRING,
            allowNull:false,
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            references: {
                model: 'user',
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

module.exports = Reviews;
