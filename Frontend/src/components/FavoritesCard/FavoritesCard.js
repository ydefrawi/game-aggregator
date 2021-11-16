import React from 'react';
import './FavoritesCard.css';

function FavoritesCard({ background, name, topGames, gameCount, id }) {
	return (
		<div className="example-1 game-card">
			<div
				className="wrapper"
				style={{
					backgroundImage: `url(${background})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover'
				}}
			>
				<div className="data">
					<div className="content">

					</div>

				</div>
			</div>
		</div>
	);
}

export default FavoritesCard;
