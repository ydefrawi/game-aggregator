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
				<span id="card-map">
					{props.gameData?.results?.map((item) => (
						<GameCard2
							id={item.id}
							key={item.id}
							name={item.name}
							rating={item.rating}
							released={item.released}
							image={item.background_image}
						/>
					))}
				</span>
				{/* Card End */}
			</div>
		</section>
	);
}

export default CardContainer;
