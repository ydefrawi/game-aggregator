import axios from "axios";

const os = require('os');
axios.defaults.baseURL =  os.homedir()

export default {
    //adds new user
        console.log(userData)
        return axios.post("api/users/", userData)
    }

}