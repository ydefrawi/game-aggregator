import {Favorites} from "../models/index.js"
import {Games} from '../models/index.js'


export const createFavoritesController = async (req, res) =>{
    console.log(req.body)
    const game = await Games.findOrCreate({
        where: {
            id: req.body.game_id,
            name: req.body.name
        }
    })
    const favorite = await Favorites.create(req.body)
    res.json(favorite)  


}

export const removeFavorites = async (req,res) =>{
    const favorite = await Favorites.destroy({
        where: {
            game_id : req.body.game_id,
            user_id : req.body.user_id
        }
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

export const getGameFavorites = async (req, res) =>{
    const favorites = await Favorites.findAll({
        where: {
            game_id: req.params.id
        }
    })
    res.json(favorites)
}