import express from "express";
import * as user from "./usersController.js"
import * as games from "./gamesController.js"
import * as favorites from "./favoritesController.js"
export const router=express.Router()


//! Here instead of splitting the routes into a separate folder structure, we can put them all in this index. Routes are technically part of the controller. 



//user controllers
router.route('/users')
    .get(user.getUsersController)
    .post(user.createUserController)

router.route('/users/:id')
    .get(user.findUserByFbId)

//game controllers
router.route('/games')
    .get(games.getGamesController)

//favorites controllers
router.route('/favorites')
    .post(favorites.createFavoritesController)
    .put(favorites.removeFavorites)

router.route('/favorites/user/:id')
    .get(favorites.usersFavorites)

router.route('/favorites/games/:id')
    .get(favorites.getGameFavorites)

//reviews controllers

