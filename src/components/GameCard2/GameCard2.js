import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css'

function GameCard2(props) {
	const background=props.image;
	const dateString=new Date(props.released).toDateString();
	console.log(dateString)
	return (
		<div class="example-2 game-card">
			<div class="wrapper" style={{backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize:"cover"}}>
				<div class="header">
					<div class="date">
						Released: {dateString}
					</div>
					<ul class="menu-content">
						<li>
							<a href="#" class="fa fa-bookmark-o" />
						</li>
						<li>
							<a href="#" class="fa fa-heart-o">
								<span>18</span>
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
						<span class="author">{props.name}</span>
						<h1 class="title">
							<a href="#">Stranger Things: The sound of the Upside Down</a>
						</h1>
						<p class="text">
							The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive
							soundtrack, out today.
						</p>
						<a href="#" class="button">
							Read more
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default GameCard2;
