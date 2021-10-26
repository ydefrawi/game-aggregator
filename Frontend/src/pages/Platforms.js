import React, { useState, useEffect } from 'react';

import Header from '../components/Header/Header';
import PlatformCard from '../components/PlatformCard/PlatformCard';

import './Platforms.css'

function Platforms({ apiKey }) {
	const [ error, setError ] = useState(null);
	const [ isLoaded, setIsLoaded ] = useState(false);
	const [ platformData, setPlatformData ] = useState([]);


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
			{/* {console.log(platformData.results)} */}
			<Header header={'Platforms'} subHeader={'Sorted by Popularity'} />
			<div className="platforms-container">
				{isLoaded?platformData?.results?.map((item) => (
        
                        <div>
                            {console.log(item)}
                            <PlatformCard id={item.id} background={item.image_background} name={item.name} topGames={item.games} gameCount={item.games_count}  />
                        </div>
				)):
                
                <div className="d-flex justify-content-center">               
                 <div className="loader"></div>
                </div>
                
                }
			</div>
		</div>
	);
}

export default Platforms;
