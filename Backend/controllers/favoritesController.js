import {Favorites} from "../models/index.js"
import {Games} from '../models/index.js'


export const createFavoritesController = async (req, res) =>{
    console.log(req.body)
    const game = await Games.create({
        id: req.body.game_id,
        name: req.body.name
    })
    const favorite = await Favorites.create(req.body)
    res.json(game, favorite)
}

export const removeFavorites = async (req,res) =>{
    const favorite = await Favorites.destroy({
        where: req.body
    })
    res.json(favorite)
}

export const usersFavorites = async (req, res) =>{
    const favorites = await Favorites.findAll({
        where: {
            user_id: req.params.id
        }
    })
    res.json(favorites)
}