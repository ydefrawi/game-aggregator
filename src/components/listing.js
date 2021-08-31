import React, { useState, useEffect } from 'react';
const key = '57f00ef977554b86b26053099f4d7489';

function Listing() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
	const [ gameData, setGameData ] = useState([]);

	const apiCall = () => {
		fetch(`https://api.rawg.io/api/games?key=${key}`)
			.then((res) => res.json())
			.then(
                (result) => {
				setIsLoaded(true);
                setGameData(result);
			},
            (error)=>{
                setIsLoaded(true);
                setError(error);
            })
	};

	useEffect(() => {
		apiCall()
	});

	return (
		<div>
			<h1>API data</h1>
			{console.log(gameData)}
			<p>{gameData.results.map(item=>(
                <li>
                    {item.id}
                </li>
            ))}</p>
		</div>
	);
}

export default Listing;
