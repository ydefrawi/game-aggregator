import React, { useState, useEffect } from 'react';

import Header from '../components/Header/Header';
import PlatformCard from '../components/PlatformCard/PlatformCard';

function Platforms({ apiKey }) {
	const [ error, setError ] = useState(null);
	const [ isLoaded, setIsLoaded ] = useState(false);
	const [ platformData, setPlatformData ] = useState([]);
    let topGamesArray = [];


    const platforms =() =>{
        platformData?.results?.map((item=>(
            topGamesArray.push(item.platform.name)
        
        )))
         return topGamesArray.join(', ');
        };


	useEffect(() => {
		fetch(`https://api.rawg.io/api/platforms?key=${apiKey}`)
			.then((res) => {
				const result = res.json();
				return result;
			})
			.then(
				(result) => {
					setIsLoaded(true);
					setPlatformData(result);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, []);

	return (
		<div>
			{console.log(platformData.results)}
			<Header header={'Platforms'} subHeader={'Sorted by Popularity'} />
			<div className="platforms-container">
				{platformData?.results?.map((item) => (
					<PlatformCard background={item.image_background} name={item.name} topGames={item.topGamesArray}  />
				))}
			</div>
		</div>
	);
}

export default Platforms;
