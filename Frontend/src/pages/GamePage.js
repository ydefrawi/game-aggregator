import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import './GamePage.css';
import { getAuth, onAuthStateChanged } from "firebase/auth";
//!jotai stuff
import { dbUser } from '../App';
import {useAtom} from 'jotai'




function GamePage({ apiKey }) {
	const [ error, setError ] = useState(null);
	const [ isLoaded, setIsLoaded ] = useState(false);
	const [ gameDetails, setGameDetails ] = useState([]);
	const [ gameScreens, setGameScreens ] = useState([]);
	const [ gameVideos, setGameVideos ] = useState([]);
	//!jotai hook
	const [userData, setUserData]=useAtom(dbUser)
	// const classes = useStyles();

	let { id } = useParams();
	// console.log('Api key', apiKey);
	// console.log('Game ID', id);
	// console.log('Game Details', gameDetails);

	//! This is just to test that a user is logged in, delete/refactor later
	useEffect(() => {
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log("user",user)
				console.log(user.email + ' is signed in!')
				//! checking for atom change
				console.log("userData",userData)
				
			  // User is signed in, see docs for a list of available properties
			  // https://firebase.google.com/docs/reference/js/firebase.User
			  const uid = user.uid;
			  // ...
			} else {
			  // User is signed out
			  // ...
			}
		  });
		
	}, [])
	

	useEffect(
		() => {
			fetch(`https://api.rawg.io/api/games/${id}?key=${apiKey}`)
				.then((res) => {
					const result = res.json();
					return result;
				})
				.then(
					(result) => {
						setGameDetails(result);
					},
					(error) => {
						setError(error);
					}
				)
				.then(
					fetch(`https://api.rawg.io/api/games/${gameDetails.slug}/screenshots?key=${apiKey}`)
						.then((res) => {
							const result = res.json();
							return result;
						})
						.then(
							(result) => {
								setGameScreens(result.results);
							},
							(error) => {
								setError(error);
							}
						)
				)
				.then(
					fetch(`https://api.rawg.io/api/games/${gameDetails.id}/movies?key=${apiKey}`)
						.then((res) => {
							const result = res.json();
							return result;
						})
						.then(
							(result) => {
								setGameVideos(result);
							},
							(error) => {
								// setIsLoaded(true);
								setError(error);
							}
						)
				).then(
                    setIsLoaded(true)
                )

			// console.log(gameDetails);
		},
		[ gameDetails.slug ]
	);

	return (
		<div>
			{/* {console.log(gameDetails)}
			{console.log(gameScreens)}
			{console.log("gameVideos")}
			{console.log(gameVideos)} */}

			<Header header={gameDetails.name} />

			<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
				<div class="carousel-inner">
					{gameScreens[0]?.image!=='https://media.rawg.io/media/screenshots/8de/8deccdba405d1ccdca2d647290156330.jpg' ? gameScreens?.map(
						(item) =>
							item === gameScreens[0] ? (
							
									<div class="carousel-item active" data-bs-interval="5000">
										<img src={item.image} alt={item.title} />
									</div>
							) : (
								<div class="carousel-item" data-bs-interval="5000">
									<img src={item.image} class="d-block w-100" alt="..." />
								</div>
							)
					): null}
				</div>
				<button
					class="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleInterval"
					data-bs-slide="prev"
				>
					<span class="carousel-control-prev-icon" aria-hidden="true" />
					<span class="visually-hidden">Previous</span>
				</button>
				<button
					class="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleInterval"
					data-bs-slide="next"
				>
					<span class="carousel-control-next-icon" aria-hidden="true" />
					<span class="visually-hidden">Next</span>
				</button>
			</div>

			<p className="game-page-description">{gameDetails.description_raw}</p>
		</div>
	);
}

export default GamePage;
