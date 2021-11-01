import sequelize from '../config/connection.js';

//imported models from index 
import {User, Favorites, Games, Reviews} from "../models/index.js"

//json data for seeeds
import userData from './userData.js';
import favoritesData from './favoritesData.js';
import gameData from './gameData.js';
import reviewsData from './reviewsData.js';

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
