require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');


app.use("/", (req, res)=>{
  res.send("<h1>Hello World</h1>")
})

  // User.create({
  //   firstName:"Bob",
  //   lastName:"Smith",
  //   favorites:"God of War"
  // })

// Start the API server

sequelize.sync({ force: false }).then((results) => {
  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
})}).catch((err)=>console.log(err))

