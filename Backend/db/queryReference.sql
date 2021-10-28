

SELECT * 
FROM gamehub_db.favorites 
left join games on games.id=favorites.game_id
WHERE user_id=2

