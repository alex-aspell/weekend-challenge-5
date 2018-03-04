app.controller('SearchController', ['SwapiService', function(SwapiService){
    let self = this;

    
    self.searchAPI = SwapiService.searchAPI; 
     
    self.searchAPI;
    self.searchArray = SwapiService.searchArray;
    console.log(self.searchArray);
}]);