import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import './GamePage.css';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//     //   justifyContent: 'space-around',
//       overflow: 'hidden',
//       backgroundColor: theme.palette.background.paper,
//     },
//     imageList: {
//       width: 500,
//       height: 450,
//     },
//   }));

function GamePage({ apiKey }) {
	const [ error, setError ] = useState(null);
	const [ isLoaded, setIsLoaded ] = useState(false);
	const [ gameDetails, setGameDetails ] = useState([]);
	const [ gameScreens, setGameScreens ] = useState([]);
	// const classes = useStyles();

	let { id } = useParams();
	console.log('Api key', apiKey);
	console.log('Game ID', id);
	console.log('Game Details', gameDetails);

	useEffect(
		() => {
			fetch(`https://api.rawg.io/api/games/${id}?key=${apiKey}`)
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
				)
				.then(
					fetch(`https://api.rawg.io/api/games/${gameDetails.slug}/screenshots?key=${apiKey}`)
						.then((res) => {
							const result = res.json();
							return result;
						})
						.then(
							(result) => {
								setIsLoaded(true);
								setGameScreens(result.results);
							},
							(error) => {
								setIsLoaded(true);
								setError(error);
							}
						)
				);
			console.log(gameDetails);
		},
		[ gameDetails.slug ]
	);

	return (
		<div>
			{console.log(gameDetails)}
			{console.log(gameScreens)}

			<Header header={gameDetails.name} />
			{/* 
			<div className="">
				{gameScreens?.map((item) => (
					<div key={item.image}>
						<img src={item.image} alt={item.title} />
					</div>
				))}
			</div> */}

			<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
				<div class="carousel-inner">
					{gameScreens?.map(
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
					)}
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
