import axios from "axios";

const os = require('os');
// axios.defaults.baseURL =  os.homedir()

export default {
    //adds new user
        createUser: function (userData){
        console.log(userData)
        return axios.post("api/users/", userData)
        }
}
