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

module.exports = Reviews;
