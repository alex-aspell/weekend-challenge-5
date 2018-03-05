const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const FavoritesSchema = new mongoose.Schema({
    name: {type: String, required: true}
});

const Favorite = mongoose.model('Favorite', FavoritesSchema, 'favorites');

router.post('/', (request, response) => {
    let newFavorite = new Favorite(request.body);
    console.log('Favorite saved is', request.body);
    newFavorite.save((error, savedFavorite) => {
        if(error){
            console.log('Error on add favorite', error);
            response.sendStatus(500);
        } else{
            response.sendStatus(201);
        }
    }) 
})

router.get('/', (request, response) => {
    Favorite.find({}, (error, gotFavorites) => {
        if(error){
            console.log('error on got favorites', error);
            response.sendStatus(500);
        } else{
            response.send(gotFavorites);
        }
    }) 
})


module.exports = router; 