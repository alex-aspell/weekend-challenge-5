const app = angular.module('swapiApp', ['ngRoute', 'ngMaterial']);

app.config(function($routeProvider){
    $routeProvider.when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchController as sc'
    }).when('/favorites', {
        templateUrl: 'views/favorites.html',
        controller: 'FavoritesController as fc'
    }).otherwise({ 
        template: '<h1>404 Page Not Found</h1>' 
    });
});