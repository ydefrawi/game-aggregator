import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header'
import Listing from '../components/Listing'
import CardContainer from '../components/CardContainer/CardContainer'
const key = '57f00ef977554b86b26053099f4d7489';

function Home(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
	const [ gameData, setGameData ] = useState([]);


	useEffect(() => {
        fetch(`https://api.rawg.io/api/games?ordering=released&key=${key}`)
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

// console.log(gameData)

return (
    <div>
    <Header/>
    <CardContainer gameData={gameData}/>
    </div>

)

}

export default Home;
