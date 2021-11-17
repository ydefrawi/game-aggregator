import { Reviews } from '../models/index.js'
import {User} from '../models/index.js'

export const addReviewController =async (req,res)=>{
    const review = await Reviews.create(req.body)
    res.json(review)
}