import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {Link} from 'react-router-dom';
import './GameCard2.css';
import API from '../../utils/API';
import { dbUser } from '../../App';
import {useAtom} from 'jotai'

// const key = '57f00ef977554b86b26053099f4d7489';

function GameCard2({apiKey, gameID, key, name, rating, released, image}) {
// !IMPORTANT: HIDE API KEY
	const background = image;
	const dateString = new Date(released).toDateString();
	let platArray = [];
	
	const [ error, setError ] = useState(null);
	const [ isLoaded, setIsLoaded ] = useState(false);
	const [ gameDetails, setGameDetails ] = useState([]);
	const [userData, setUserData]=useAtom(dbUser)
	const [favorites, setFavorites] = useState([])
	const [isFavorite, setIsFavorite] = useState(false)

	useEffect(() => {
		fetch(`https://api.rawg.io/api/games/${gameID}?key=${apiKey}`)
			.then((res) => {
				const result = res.json();
				return result;
			})
			.then(
				(result) => {
					setIsLoaded(true);
					setGameDetails(result);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
		}, []);

//Use effect pulls all favorites and checks to see if currently logged in user has favorited game. Waits for game details before firing
		
		useEffect(() =>{
			API.getGameFavorites(gameDetails.id)
				.then(res => {
					if(res.data){
						const favoriteList = res.data
						setFavorites(favoriteList)
						favoriteList.forEach(favorite => {
							if(favorite.user_id === userData.id){
								setIsFavorite(true)
							}
						});
					}
				})
	}, [gameDetails])

//toggleFavorite switches between adding and removing favorite based on status of "isFavorite." Adds and removes current user from "favorites" list.

	const toggleFavorite = (e) => {
		e.preventDefault()
		const favoriteData = {
			game_id: gameDetails.id,
			name: gameDetails.name,
			user_id: userData.id
		}
		if(!isFavorite){
			API.setFavorite(favoriteData)
				.then(res => setFavorites([...favorites, res.data]))
			setIsFavorite(true)
		}else{
			API.deleteFavorite(favoriteData)
			setIsFavorite(false)
			setFavorites(favorites.filter(data => data.user_id !== userData.id))
		}
	}

// Function that pushes all the game's platforms into an array and adds a comma/space
// between them

const platforms =() =>{
gameDetails?.parent_platforms?.map((item=>(
		platArray.push(item.platform.name)

)))
 return platArray.join(', ');
};

const starRating = () =>{
		const starTotal=5;
		const starPercentage = (rating/starTotal)*100;
		const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
		return starPercentageRounded;
}
	



	var platArrayString = platArray.join(', ');

	return (
		<div class="example-2 game-card">
			{/* {console.log("gameDetails" , gameDetails)}
			{console.log(starRating())} */}

			<div
				class="wrapper"
				style={{
					backgroundImage: `url(${background})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover'
				}}
			>
				<div class="header">
					<div class="date">Released: {dateString}</div>
					<ul class="menu-content">
						<li>
							<a href="#" class="fa fa-bookmark-o" />
						</li>
						<li>
							<a href="#" class="fa fa-heart-o" onClick = {toggleFavorite}>
								<span>{favorites.length}</span>
							</a>
						</li>
						<li>
							<a href="#" class="fa fa-comment-o">
								<span>3</span>
							</a>
						</li>
					</ul>
				</div>
				<div class="data">
					<div class="content">
						<span class="author">{name}</span>
						<h1 class="title">
							<p class="stars-outer">
							<div class="stars-inner" style={{width:starRating()}}></div>
							</p>
							{/* Lists platforms game is available on */}
							<p href="#">
								{platforms()}
							</p>
						</h1>
						<p class="text">{gameDetails?.description_raw?.substring(0, 270)}</p>
						{/* <Link to ={`/games${d}`} */}
						<a href={"/games/"+gameDetails.id} class="button">
							Read more
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default GameCard2;
