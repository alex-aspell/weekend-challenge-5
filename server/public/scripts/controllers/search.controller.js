console.log('Search Controller connected');
app.controller('SearchController', ['SwapiService', function(SwapiService){
    let self = this;

    self.searchAPI = SwapiService.searchAPI; 
    self.searchArray = SwapiService.searchArray; 
}]);