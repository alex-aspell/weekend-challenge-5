app.controller('SearchController', ['SwapiService', function(SwapiService){
    let self = this;

    
    self.searchAPI = SwapiService.searchAPI; 
    self.addFavorite = SwapiService.addFavorite; 
     
    self.searchAPI;
    self.searchArray = SwapiService.searchArray;
}]);