var app = angular.module('demo', ['ui.router','angular-md5', 'angular-loading-bar', 'ngStorage']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state('main', {
        url:'/',
        templateUrl:'templates/main.html',
        controller: 'MainCtrl as mainCtrl',
   
       
    })
    .state('portfolio', {
        url:'/portfolio/{user_name}',
        templateUrl:'templates/portfolio.html',
        controller: 'PortfolioCtrl as portfolioCtrl',
        resolve : {
            getdata : function($stateParams, Portfolio){
                return Portfolio.getData($stateParams.user_name)
            }

        }
   
       
    })
    

}]);