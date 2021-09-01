import React, { useState, useEffect } from 'react';
const key = '57f00ef977554b86b26053099f4d7489';

function Listing() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
	const [ gameData, setGameData ] = useState([]);

	const apiCall = () => {

	};

	useEffect(() => {
        fetch(`https://api.rawg.io/api/games?key=${key}`)
        .then((res) => {
            const result=res.json();
            return result;
        }
        )
        .then(
            (result) => {
            setIsLoaded(true);
            setGameData(result);
        },
        (error)=>{
            setIsLoaded(true);
            setError(error);
        })
	},[]);

	return (
		<div>
			<h1>API data</h1>
			{console.log(gameData)}
			<ol>{gameData?.results?.map(item=>(
                <li>
                    <div className="d-flex flex-column justify-content-center">
                    <span id="game-title">{item.name}</span>
                    <span>Rating: {item.rating}</span>
                    <span>Released: {item.released}</span>
                    <img src={item.background_image}/>
                    </div>
                    
                </li>

            ))}</ol>
		</div>
	);
}

export default Listing;
