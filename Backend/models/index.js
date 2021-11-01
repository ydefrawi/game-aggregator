const User = require('./User');
const Favorites = require('./Favorites');
const Games = require('./Games');
const Reviews = require('./Reviews');

User.hasMany(Favorites, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

User.hasMany(Reviews, {
    foreignKey: 'user_id',
  });

Games.hasMany(Favorites, {
      foreignKey: 'game_id',
  });

Games.hasMany(Reviews, {
    foreignKey: 'game_id',
  });


Favorites.belongsTo(User, {
    foreignKey: 'user_id'
  });

Favorites.belongsTo(Games, {
    foreignKey: 'game_id'
  });

Reviews.belongsTo(Games, {
    foreignKey: 'game_id'
});

Reviews.belongsTo(User, {
    foreignKey: 'user_id'
});






// Games.hasMany(Reviews, {
//   foreignKey: 'user_id',
// });

module.exports = {User, Favorites, Games, Reviews};