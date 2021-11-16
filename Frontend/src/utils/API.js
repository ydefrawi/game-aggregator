import axios from "axios";

const os = require('os');
axios.defaults.baseURL =  os.homedir()

export default {
    //adds new user
        createUser: function (userData){
        console.log(userData)
            return axios.post("api/users/", userData)
        },
        getUser: function (userData){
            return axios.get("api/users/"+userData)
        },
        getGameFavorites: function (gameData){
            return axios.get("api/favorites/games/"+gameData)
        },
        setFavorite: function (favoriteData){
            return axios.post("api/favorites", favoriteData)
        },
        deleteFavorite: function(favoriteData){
            return axios.put("api/favorites", favoriteData)
        }
}
