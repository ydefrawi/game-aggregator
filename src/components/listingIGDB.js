import React, { useState, useEffect } from 'react';
const auth = 'https://id.twitch.tv/oauth2/token?client_id=abcdefg12345&client_secret=hijklmn67890&grant_type=client_credentials
';

function Listing() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
	const [ gameData, setGameData ] = useState([]);

	const apiCall = () => {

	};

	useEffect(() => {
        fetch(`https://api.rawg.io/api/games?key=${key}`)
        .then((res) => {
            res.json()
            console.log(res)
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
			<p>{gameData?.map(item=>(
                <li>
                    {item.results}
                </li>
            ))}</p>
		</div>
	);
}

export default Listing;
