import {Games} from '../models/index.js'


export const getGames = async (req, res)=>{
    const games = await Games.findAll();
    res.json(games)
  }