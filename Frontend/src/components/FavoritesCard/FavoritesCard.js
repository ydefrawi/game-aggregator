import {useEffect, useState} from 'react';
import './FavoritesCard.css';

function FavoritesCard({gameId, apiKey}) {
	const [gameDetails, setGameDetails]=useState()


	useEffect(() => {
		fetch(`https://api.rawg.io/api/games/${gameId}?key=${apiKey}`)
		.then((res)=>{
			const details=res.json();
			return details;
		}).then((details)=>{
			// console.log(details)
			setGameDetails(details)
		},
		(error)=>{
			console.log(error)
		})
		
		
	}, [apiKey])

	return (
		<div className="container">
			{console.log(gameDetails)}
				<div class="col-md-4">
					<div class="profile-card-2">
						<img
							src={gameDetails?.background_image}
							class="img img-responsive favorites-img"
						/>
						<a href={`games/${gameId}`}>
							<div class="profile-name">{gameDetails?.name}
							</div></a>
					
						<div class="profile-username"></div>
					</div>
				</div>
			
		</div>
	);
}

export default FavoritesCard;
