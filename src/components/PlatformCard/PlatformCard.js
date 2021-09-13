import React from 'react';
import './PlatformCard.css';

function PlatformCard({ background, name, topGames, gameCount, id }) {
	let topGamesArray = [];

	const topGamesFunction = () => {
		topGames?.map((item) => topGamesArray.push(item.name));
		return topGamesArray;
	};

	return (
		<div className="example-1 game-card">
			{console.log(topGames)}
			<div
				className="wrapper"
				style={{
					backgroundImage: `url(${background})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover'
				}}
			>
				<div className="data">
					<div className="content">
						<a href = {`/platforms/${id}`}><span className="author">{name}</span></a>
                        <hr/>
						<p>
							Popular Items: {gameCount}
						</p>
                 

						<ul className="top-game-list">
							<h1 className="title">
								{topGames.slice(0, 3).map((item) => (
									<li className="top-game-bullet">
										<a href={`/games/${item.id}`}>{item.name}</a>
									</li>
								))}
							</h1>
						</ul>

						{/* <label for="show-menu" className="menu-button">
							<span />
						</label> */}
					</div>
					{/* <input type="checkbox" id="show-menu" />
					<ul className="menu-content">
						<li>
							<a href="#" className="fa fa-bookmark-o" />
						</li>
						<li>
							<a href="#" className="fa fa-heart-o">
								<span>47</span>
							</a>
						</li>
						<li>
							<a href="#" className="fa fa-comment-o">
								<span>8</span>
							</a>
						</li>
					</ul> */}
				</div>
			</div>
		</div>
	);
}

export default PlatformCard;
