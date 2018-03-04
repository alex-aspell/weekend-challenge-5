console.log('Swapi Service connected');
app.service('SwapiService', ['$http', function($http){
    let self = this;

    self.employeeArray = [];

    self.searchAPI = function(newSearch){
        console.log('searching API', newSearch);
        $http({
            method: 'GET',
            url: `https://swapi.co/api/${newSearch.value}/?search=${newSearch.keyword}`
        }).then(function(response){
            console.log('response', response.data);
        }).catch(function(error){
            console.log('error', error);
        })
    }
}]);