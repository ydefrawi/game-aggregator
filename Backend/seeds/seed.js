const sequelize = require('../config/connection');

//imported models from index 
const {User, Favorites, Games, Reviews}=require ("../models")

//json data for seeeds
const userData = require('./userData.json');
const favoritesData = require('./favoritesData.json');
const gameData = require('./gameData.json');
const reviewsData = require('./reviewsData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    
    await User.bulkCreate(userData, {
        individualHooks: false,
        returning: true,
    });
    await Games.bulkCreate(gameData, {
        individualHooks: false,
        returning: true,
    });
    
    await Reviews.bulkCreate(reviewsData, {
        individualHooks: false,
        returning: true,
      });

    await Favorites.bulkCreate(favoritesData, {
      individualHooks: false,
      returning: true,
    });



    process.exit(0);
}

seedDatabase();
