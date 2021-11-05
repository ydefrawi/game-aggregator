import {User} from '../models/index.js'


export const getUsers = async (req, res)=>{
    const users = await User.findAll();
    res.json(users)
  }

export const createUser = async (req, res)=>{
    console.log(req)
    const users = await User.create(req.body);
    res.json(users)
  }