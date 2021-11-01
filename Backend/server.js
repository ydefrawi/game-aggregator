import dotenv from 'dotenv'
import express from "express";
import sequelize from './config/connection';
const app = express();
const PORT = process.env.PORT || 3001;
dotenv.config();

//! importing models
import {User, Favorites, Games} from './models';



//! controller
const findUsers=async()=>{
  const users = await User.findAll({
    include:[{
      model:Favorites
    }]
  })
  console.log(JSON.stringify(users, null, 4))
  return users;
}

findUsers();

//! API or back-end route, part of controller
app.use ("/users/favorites", (req, res)=>{
  res.json(findUsers)
})


app.use("/", (req, res)=>{
  res.send("<h1>Hello World</h1>")
})

// Start the API server
sequelize.sync({ force: false }).then((results) => {
  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
})}).catch((err)=>console.log(err))

