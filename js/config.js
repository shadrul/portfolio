





var app = angular.module('demo', ['ui.router','firebase','angular-md5']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state('main', {
        url:'/',
        templateUrl:'templates/main.html',
        controller: 'MainCtrl as mainCtrl',
        resolve: {
          stars: function (Stars){
          return Stars.$loaded();
        }
      }
       
    })
    // $stateProvider
    // .state('dashboard', {
    //     url:'/dashboard',
    //     templateUrl:'templates/dashboard.html',
    //     // controller:'AuthCtrl as authCtrl'
       
    // })
    .state('login', {
        url:'/login',
        templateUrl:'templates/login.html',
        controller:'AuthCtrl as authCtrl',
        resolve: {
          requireNoAuth: function($state, Auth){
            return Auth.$requireSignIn().then(function(auth){
                console.log(auth);
              $state.go('main');
            }, function(error){
              return;
            });
          }
        }
       
    })
    // .state('home', {
    //     url:'/home',
    //     templateUrl:'templates/home.html',
    //     controller:'HomeCtrl as homeCtrl', 
    //     resolve: {
    //       requireNoAuth: function($state, Auth){
    //         return Auth.$requireSignIn().then(function(auth){
    //           $state.go('channels');
    //         }, function(error){
    //           return;
    //         });
    //       }
    //     } 
    // }) 
    // .state('profile', {
    //   url: '/profile',
    //   templateUrl:'templates/profile.html',
    //   controller: 'ProfileCtrl as profileCtrl',
    //   resolve: {
    //     auth: function($state, Users, Auth){
    //       return Auth.$requireSignIn().catch(function(){
    //         console.log("hello");
    //         $state.go('home');
    //       });
    //     },
    //     profile: function(Users, Auth){
    //       return Auth.$requireSignIn().then(function(auth){
    //         return Users.getProfile(auth.uid).$loaded();
    //       });
    //     }
    //   }
    // })
    // .state('channels', {
    //   url: '/channels',
    //   controller: 'ChannelsCtrl as channelsCtrl',
    //   templateUrl: 'templates/channels.html',
    //   resolve: {
    //     channels: function (Channels){
    //       return Channels.$loaded();
    //     },
    //     profile: function ($state, Auth, Users){
    //       return Auth.$requireSignIn().then(function(auth){
    //         return Users.getProfile(auth.uid).$loaded().then(function (profile){
    //           if(profile.displayName){
    //             return profile;
    //           } else {
    //             $state.go('profile');
    //           }
    //         });
    //       }, function(error){
    //         $state.go('home');
    //       });
    //     }
    //   }
    // })
    // .state('channels.create', {
    //   url: '/create',
    //   templateUrl: 'templates/create.html',
    //   controller: 'ChannelsCtrl as channelsCtrl'
    // })
    // .state('channels.messages', {
    //   url: '/{channelId}/messages',
    //   templateUrl: 'templates/messages.html',
    //   controller: 'MessagesCtrl as messagesCtrl',
    //   resolve: {
    //     messages: function($stateParams, Messages){
    //       return Messages.forChannel($stateParams.channelId).$loaded();
    //     },
    //     channelName: function($stateParams, channels){
    //       return '#'+channels.$getRecord($stateParams.channelId).name;
    //     }
    //   }
    // })
    // .state('channels.direct', {
    //   url: '/{uid}/messages/direct',
    //   templateUrl: 'templates/messages.html',
    //   controller: 'MessagesCtrl as messagesCtrl',
    //   resolve: {
    //     messages: function($stateParams, Messages, profile){
    //       return Messages.forUsers($stateParams.uid, profile.$id).$loaded();
    //     },
    //     channelName: function($stateParams, Users){
    //       return Users.all.$loaded().then(function(){
    //         return '@'+Users.getDisplayName($stateParams.uid);
    //       });
    //     }
    //   }
    // });



//     // login page url
   

}]);