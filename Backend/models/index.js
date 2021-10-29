const User = require('./User');
const Favorites = require('./Favorites');
const Games = require('./Games');
const Reviews = require('./Reviews');

User.hasMany(Favorites, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

Favorites.belongsTo(User, {
    foreignKey: 'user_id'
  });

// User.hasMany(Reviews, {
//     foreignKey: 'user_id',
//   });

module.exports = {User, Favorites, Games, Reviews};