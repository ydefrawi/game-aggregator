import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import './GamePage.css';
import { getAuth, onAuthStateChanged } from "firebase/auth";
//!jotai stuff
import { dbUser } from '../App';
import { useAtom } from 'jotai'
import API from '../utils/API';




function GamePage({ apiKey }) {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [gameDetails, setGameDetails] = useState([]);
	const [gameScreens, setGameScreens] = useState([]);
	const [gameVideos, setGameVideos] = useState([]);
	const [currentReview, setCurrentReview]=useState("")
	
	//!jotai hook
	const [userData, setUserData] = useAtom(dbUser)
	// const classes = useStyles();

	let { id } = useParams();
	// console.log('Api key', apiKey);
	// console.log('Game ID', id);
	// console.log('Game Details', gameDetails);

	useEffect(() => {
		console.log(userData)
	}, [userData])


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
		[gameDetails.slug]
	);

	function handleChange(event){
		event.preventDefault();
		setCurrentReview(event.target.value);
	}

	function handleSubmit(event){
		event.preventDefault();
		// mock up of what we'll be passing into our req.body:
		API.addReview({
			game_id:id,
			review:currentReview,
			user_id:userData.id
		})
		alert("REVIEW ADDED TO REVIEWS TABLE"+"\nReview: "+ currentReview + "\nUser Id: " + userData.id + "\nGame Id: " + id);
	}



	return (
		<div>
			{/* {console.log(gameDetails)}
			{console.log(gameScreens)}
			{console.log("gameVideos")}
			{console.log(gameVideos)} */}

			<Header header={gameDetails.name} />

			<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
				<div class="carousel-inner">
					{gameScreens[0]?.image !== 'https://media.rawg.io/media/screenshots/8de/8deccdba405d1ccdca2d647290156330.jpg' ? gameScreens?.map(
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
					) : null}
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

			{/* Button that opens modal */}
			<button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#reviewModal">
				Review This Game
			</button>

			{/* Review Modal */}
			<div class="modal fade" id="reviewModal" tabindex="-1" aria-labelledby="exampleModalCenterTitle" style={{ display: "none" }} aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="modal-title">Write Your Review for {gameDetails.name}</h5>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						{/* Review Input */}
						<div class="modal-body">
							<textarea id="review-input" value={currentReview} onChange={handleChange}></textarea>
						</div>

						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
							<button type="button" class="btn btn-info" onClick={handleSubmit}>Submit Review</button>
						</div>
					</div>
				</div>
			</div>
			{/* End Review Modal */}
		</div>
	);
}

export default GamePage;
