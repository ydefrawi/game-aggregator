import {User} from '../models/index.js'


export const getUsersController = async (req, res)=>{
    const users = await User.findAll();
    res.json(users)
  }

export const createUserController = async (req, res)=>{
    console.log(req.body)
    const users = await User.create(req.body);
    res.json(users)
  }