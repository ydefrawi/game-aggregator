import React, { useState, useEffect } from 'react';
import Listing from '../components/Listing'
import CardContainer from '../components/CardContainer/CardContainer'
const key = '57f00ef977554b86b26053099f4d7489';

function Home(){
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

console.log("platforms",gameData?.results?.platforms?.parent_platforms?.name);

return (
    <div>
    {/* <Listing/> */}
    <CardContainer gameData={gameData}/>
    </div>

)

}

export default Home;
