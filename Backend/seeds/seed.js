const sequelize = require('../config/connection');

//todo: index these
const User = require('../models/User');
const Favorites = require('../models/Favorites');
const Games = require('../models/Games');

const userData = require('./userData.json');
const favoritesData = require('./favoritesData.json');
const gameData = require('./gameData.json');

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
    
    await Favorites.bulkCreate(favoritesData, {
      individualHooks: false,
      returning: true,
    });

    process.exit(0);
}

seedDatabase();
