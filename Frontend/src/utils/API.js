import axios from "axios";

const os = require('os');
axios.defaults.baseURL =  os.homedir()

export default {
    //adds new user
        createUser: function (userData){
        console.log(userData)
            return axios.post("api/users/", userData)
        },
        //gets logged in user's data using their uid (from FB) 
        getUser: function (uid){
            return axios.get("api/users/"+uid)
        },
        //gets all favorites for a particular game
        getGameFavorites: function (GameId){
            return axios.get("api/favorites/games/"+GameId)
        },
        //gets all favorites for a particular user
        getUserFavorites: function(userId){
            return axios.get("api/favorites/user/"+userId)
        },
        //adds a favorite to the Favorites table AND creates game in game table if it doesn't exist
        setFavorite: function (favoriteData){
            return axios.post("api/favorites", favoriteData)
        },
        //removes a user's favorite from favorites table using a PUT
        deleteFavorite: function(favoriteData){
            return axios.put("api/favorites", favoriteData)
        },
        addReview:function(reviewData){
            return axios.post("api/game/review", reviewData)
        }
}
