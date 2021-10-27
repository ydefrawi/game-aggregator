const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection")

class User extends Model{}

//takes in 2 arguments, fields and options
User.init({
    firstName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    favorites:{
        type:DataTypes.STRING,
        allowNull:true
    }}, {
        sequelize, 
        timestamps:false,
        modelName:'User'
    }
)

module.exports=User;