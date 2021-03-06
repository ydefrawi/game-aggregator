import React from 'react';

function GameCard() {
	return (
			<div class="example-1 game-card">
				<div class="wrapper">
					<div class="date">
						<span class="day">12</span>
						<span class="month">Aug</span>
						<span class="year">2016</span>
					</div>
					<div class="data">
						<div class="content">
							<span class="author">Jane Doe</span>
							<h1 class="title">
								<a href="#">Boxing icon has the will for a couple more fights</a>
							</h1>
							<p class="text">
								The highly anticipated world championship fight will take place at 10am and is the
								second major boxing blockbuster in the nation after 43 years.
							</p>
							<label for="show-menu" class="menu-button">
								<span />
							</label>
						</div>
						<input type="checkbox" id="show-menu" />
						<ul class="menu-content">
							<li>
								<a href="#" class="fa fa-bookmark-o" />
							</li>
							<li>
								<a href="#" class="fa fa-heart-o">
									<span>47</span>
								</a>
							</li>
							<li>
								<a href="#" class="fa fa-comment-o">
									<span>8</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
	);
}

export default GameCard;
