const sequelize = require('../config/connection');
const User = require('../models/User');

const userData = require('./userData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await User.bulkCreate(userData, {
      individualHooks: false,
      returning: true,
    });

    process.exit(0);


}

seedDatabase();