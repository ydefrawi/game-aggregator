import React from 'react';
import './FavoritesCard.css';

function FavoritesCard({ gameId }) {
	return (
		<div className="container">
			
				<div class="col-md-4">
					<div class="profile-card-2">
						<img
							src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-2.jpg"
							class="img img-responsive"
						/>
						<div class="profile-name">Grand Theft Auto</div>
						<div class="profile-username">{gameId}</div>
					</div>
				</div>
			
		</div>
	);
}

export default FavoritesCard;
