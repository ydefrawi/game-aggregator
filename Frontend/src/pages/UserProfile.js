import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import {atom, useAtom} from 'jotai'
import './UserProfile.css'
import {dbUser} from '../App'
import API from '../utils/API'
import CardContainer from '../components/CardContainer/CardContainer'

function UserProfile({ apiKey }) {
	const [ error, setError ] = useState(null);
	const [ isLoaded, setIsLoaded ] = useState(false);
    const [userData, setUserData]=useAtom(dbUser)
    const [userFavorites, setUserFavorites]=useState([])

	// useEffect(() => {
	// 	fetch(`https://api.rawg.io/api/platforms?key=${apiKey}`)
	// 		.then((res) => {
	// 			const result = res.json();
	// 			return result;
	// 		})
	// 		.then(
	// 			(result) => {
	// 				setIsLoaded(true);
	// 			},
	// 			(error) => {
	// 				setIsLoaded(true);
	// 				setError(error);
	// 			}
	// 		);
	// }, []);

    useEffect(() => {
        console.log(userData)
        API.getUserFavorites(userData.id)
        .then(res=> {
            setUserFavorites(res.data)
        })
    
    }, [userData])

	return (
		<div>
    
			<Header header={'User Profile'} subHeader={'Your Profile'} />
                Your Favorites: 
            {/* <CardContainer gameData={userFavorites} apiKey={apiKey}/> */}
            <div id="favorite-map">
                {userFavorites?.map((item) =>(
                    <p>
                    {item.game_id}


                    </p>
                ))}
            </div>
            {console.log("User Favorites", userFavorites )}
                
		</div>
	);
}

export default UserProfile;
