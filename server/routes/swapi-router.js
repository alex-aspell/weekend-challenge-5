const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const FavoritesSchema = new mongoose.Schema({
    name: String,
    title: String,
    gender: String,
    climate: String,
    episode_id: Number,
    model: String,
    classification: String,
    birth_year: String,
    terrain: String,
    release_date: Date,
    manufacturer: String,
    language: String
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

router.delete('/delete/:id', (request, response) => {
    let id = request.params.id;
    Favorite.findByIdAndRemove(
        {"_id": id},
        (error, success) => {
          if(error){
            console.log('error in delete', error);
            response.sendStatus(500);
          } else {
            response.sendStatus(200);
          }
        })
})
module.exports = router; 