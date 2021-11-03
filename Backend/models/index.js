import User from './User.js';
import Favorites from './Favorites.js';
import Games from './Games.js';
import Reviews from './Reviews.js';

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

export {User, Favorites, Games, Reviews};