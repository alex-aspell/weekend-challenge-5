app.service('SwapiService', ['$http', function($http){
    let self = this;

    self.searchArray = {list: []};
    self.displayFavorites = {list: []};

    self.searchAPI = function(newSearch){
        console.log('searching API', newSearch);
        $http({
            method: 'GET',
            url: `https://swapi.co/api/${newSearch.value}/?search=${newSearch.keyword}`
        }).then(function(response){
            console.log('response', response.data);
            self.searchArray.list = response.data.results; 
        }).catch(function(error){
            console.log('error', error);
        })
    }

    self.addFavorite = function(result){
        console.log('send result as favorite', result)
        $http({
            method: 'POST',
            url: '/favorites',
            data: result
        }).then(function(response){
            console.log('Favorite added', response);
        }).catch(function(error){
            console.log('favorite error', error);
        })
    }

    self.getFavorites = function(){
        $http({
            method: 'GET',
            url: '/favorites'
        }).then(function(response){
            console.log(response.data);
            self.displayFavorites.list = response.data;
        }).catch(function(error){
            console.log('display error', error)
        })
    }

    self.deleteFavorite = function(favorite){
        $http({
            method: 'DELETE',
            url: `/favorites/delete/${favorite._id}`
        }).then(function(response){
            console.log('delete', response);
            self.getFavorites();
        }).catch(function(error){
            console.log('delete error', error);
        })
    }
}]);