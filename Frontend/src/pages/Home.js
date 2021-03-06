import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header'
import CardContainer from '../components/CardContainer/CardContainer'
// !IMPORTANT HIDE API KEY
const apiKey = '57f00ef977554b86b26053099f4d7489';

function Home(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
	const [ gameData, setGameData ] = useState([]);


	useEffect(() => {
        fetch(`https://api.rawg.io/api/games?ordering=metacritic,metacritic=90,100&key=${apiKey}`)
        .then((res) => {
            const result=res.json();
            console.log(result)
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

console.log(gameData)

return (
    <div>
    <Header header={"All Time Top Reviewed"} subHeader={"Based on Metacritic Scores"}/>
    <CardContainer gameData={gameData} apiKey={apiKey}/>
    </div>

)

}

export default Home;
