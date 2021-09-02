import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css'
const key = '57f00ef977554b86b26053099f4d7489';


function GameCard2(props) {
	const background=props.image;
	const dateString=new Date(props.released).toDateString();
	const id=props.id
	let platArray=[]

	const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
	const [ gameDetails, setGameDetails ] = useState([]);


	useEffect(() => {
        fetch(`https://api.rawg.io/api/games/${id}?key=${key}`)
        .then((res) => {
            const result=res.json();
            return result;
        }
        )
        .then(
            (result) => {
            setIsLoaded(true);
            setGameDetails(result);
        },
        (error)=>{
            setIsLoaded(true);
            setError(error);
        })
	},[]);

console.log(gameDetails)


// issue with this below. variable or function? 
// let platforms = gameDetails.parent_platforms.map((item=>(
// 	platArray.push(item.platform.name)
// )))
// console.log(platforms)
// var platArrayString = platArray.join(', ');


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
						{/* Something here breaks sometimes */}
							<a href="#">{platArray}</a>
						</h1>
						<p class="text">
							{gameDetails.description_raw}
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
