import React, { useState, useEffect } from 'react';
import { atom, useAtom } from 'jotai';
import { dbUser } from '../App';
import API from '../utils/API';
//components
import FavoritesCard from '../components/FavoritesCard/FavoritesCard';
import Header from '../components/Header/Header';

import './UserProfile.css';

function UserProfile({ apiKey }) {
	const [ error, setError ] = useState(null);
	const [ isLoaded, setIsLoaded ] = useState(false);
	const [ userData, setUserData ] = useAtom(dbUser);
	const [ userFavorites, setUserFavorites ] = useState([]);

	// useEffect(() => {
	// 	fetch(`https://api.rawg.io/api/platforms?key=${apiKey}`)
	// 		.then((res) => {
	// 			const result = res.json();
	// 			return result;
	// 		})
	// 		.then(
	// 			(result) => {
	// 				setIsLoaded(true);
	// 			},
	// 			(error) => {
	// 				setIsLoaded(true);
	// 				setError(error);
	// 			}
	// 		);
	// }, []);

	useEffect(
		() => {
			console.log(userData);
			API.getUserFavorites(userData.id).then((res) => {
				setUserFavorites(res.data);
			});
		},
		[ userData ]
	);

	return (
		<div>
			<Header header={'User Profile'} subHeader={'Your Profile'} />
			<h4>Your Games:</h4>

			<div className="row align-items-center horizontal-container" id="favorites-container">
				<div className="row d-flex" id="favorites-title"> Your Favorites </div>
            {/* Mapping over favorites, passing in game_id as prop */}
            {userFavorites.map((item)=>(
               <div className="col fav-cards" id="">
                {console.log("user favorites", userFavorites)}
					<FavoritesCard 
                        gameId={item.game_id}
                    />
				</div>
            ))}
				
			</div>
		</div>
	);
}

export default UserProfile;
