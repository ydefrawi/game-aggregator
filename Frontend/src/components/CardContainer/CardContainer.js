import React from 'react';
import './CardContainer.css';
import GameCard from '../GameCard/GameCard';
import GameCard2 from '../GameCard2/GameCard2';

function CardContainer({gameData, apiKey}) {

	return (
		<section id="card-section" className="container-fluid">
			{/* ROW */}
			<div className="cards-row">
			{console.log("game data",gameData)}
				{/* Card Start */}
				<span id="card-map">
					{gameData?.results?.map((item) => (
						<GameCard2
							gameID={item.id}
							apiKey={apiKey}
							key={item.id}
						/>
					))}
				</span>
				{/* Card End */}
			</div>
		</section>
	);
}

export default CardContainer;
