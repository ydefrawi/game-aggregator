import React from 'react';
import './CardContainer.css';
import GameCard from '../GameCard/GameCard';
import GameCard2 from '../GameCard2/GameCard2';

function CardContainer(props) {
	return (
		<section id="card-section" className="container-fluid">
			{/* ROW */}
			<div className="cards-row">
				{/* Card Start */}
				{/* <GameCard/> */}
				{/* Card End */}
				{/* Card Start */}
				<span id="card-map">
					{props.gameData?.results?.map((item) => (
						<GameCard2 name={item.name} rating={item.rating} released={item.released} image={item.background_image}>
							<div className="d-flex flex-column justify-content-center game-text">
								<span id="game-title">{item.name}</span>
								<span id="game-rating">Rating: {item.rating}</span>
								<span id="game-released">Released: {item.released}</span>
								<img src={item.background_image} />
							</div>
						</GameCard2>
					))}
				</span>
				{/* Card End */}
			</div>
			</section>
	);
}

export default CardContainer;
