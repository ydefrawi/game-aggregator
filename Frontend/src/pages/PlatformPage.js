import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardContainer from '../components/CardContainer/CardContainer';
import Header from '../components/Header/Header';

function PlatformPage({apiKey}){
    
    const { id } = useParams()
    
    const [platformDetails, setPlatformDetails] = useState({})
    const [platformGames, setPlatformGames] = useState([])

    
    const RenderHTML=(htmlPart)=>{
        return(
          <div dangerouslySetInnerHTML={ {__html: htmlPart} } />
        )
    }

    useEffect(() =>{
        fetch(`https://api.rawg.io/api/games?platforms=${id}&key=${apiKey}`)
        .then((res) => {
            const result=res.json();
            return result;
        }
        )
        .then(
            (result) => {
            // setIsLoaded(true);
            console.log(result.results)
            setPlatformGames(result);
        },
        (error)=>{
            // setIsLoaded(true);
            console.log(error)
        })
    },[])

    useEffect(()=>{
        fetch(`https://api.rawg.io/api/platforms/${id}?key=${apiKey}`)
        .then((res) => {
            const result=res.json();
            return result;
        }
        )
        .then(
            (result) => {
            // setIsLoaded(true);
            console.log(result.results)
            setPlatformDetails(result);
        },
        (error)=>{
            // setIsLoaded(true);
            console.log(error)
        })
    } ,[])

    return(
        <div>
        <Header header={platformDetails.name} subHeader={RenderHTML(platformDetails.description)}/>
        <CardContainer gameData={platformGames} apiKey={apiKey}/>
        </div>
    )

}

export default PlatformPage;