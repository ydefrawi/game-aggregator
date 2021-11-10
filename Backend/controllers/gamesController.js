import {Games} from '../models/index.js'


export const getGamesController = async (req, res)=>{
    const games = await Games.findAll();
    res.json(games)
  }