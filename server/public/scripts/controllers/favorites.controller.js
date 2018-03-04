app.controller('FavoritesController', ['SwapiService', function(SwapiService){
    let self = this. 
    
    self.addFavorite = SwapiService.addFavorite; 
}])