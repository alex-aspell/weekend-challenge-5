app.controller('FavoritesController', ['SwapiService', function(SwapiService){
    let self = this; 
    
    self.getFavorites = SwapiService.getFavorites; 
    self.displayFavorites = SwapiService.displayFavorites; 
    self.deleteFavorite = SwapiService.deleteFavorite;
    
    self.getFavorites(); 
}])