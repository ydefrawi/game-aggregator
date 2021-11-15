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
        setFavorite: function (favoriteData){
            return axios.post("api/favorites", favoriteData)
        }
}
