SELECT * 
FROM gamehub_db.favorites 
left join games on games.id=favorites.game_id
WHERE user_id=2


-- 2 joins, shows user names and game names
SELECT favorites.id, favorites.user_id, games.name as "Game Name", users.lastName as "Last Name" 
FROM gamehub_db.favorites 
left join games on games.id=favorites.game_id
left join users on users.id=favorites.user_id
WHERE user_id=2
