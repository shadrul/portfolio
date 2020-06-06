var app = angular.module('demo', ['ui.router','firebase','angular-md5', 'angular-loading-bar', 'ngStorage']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state('main', {
        url:'/',
        templateUrl:'templates/main.html',
        controller: 'MainCtrl as mainCtrl',
        resolve: {
          checkauth: function($state, Auth, Users){
             return Auth.$requireSignIn().then(function(auth){
              console.log(auth.uid);
              return Users.all.$loaded().then(function(){
                return Users.getDisplayName(auth.uid);
              });
             }, function(error){
              return;
             });
          },
          stars: function ($state, Main){
            return getStars().$loaded();
          },
          courses: function($state, Main){
            return getCourses().$loaded();
          }
      }
       
    })
    .state('course', {
        url:'/courses/:courseName',
        templateUrl:'templates/course.html',
        controller: 'CourseCtrl as courseCtrl',
        resolve: {
          checkauth: function($state, Auth, Users){
             return Auth.$requireSignIn().then(function(auth){
              console.log(auth.uid);
              return Users.all.$loaded().then(function(){
                return Users.getDisplayName(auth.uid);
              });
             }, function(error){
              return;
             });
          },
          courses: function($state, Main){
            return getCourses().$loaded();
          }
        }
       
    })
    .state('checkout', {
        url:'/courses/:courseName/checkout',
        templateUrl:'templates/checkout.html',
        controller: 'CheckoutCtrl as checkoutCtrl',
        resolve: {
          auth: function($state, Users, Auth){
          return Auth.$requireSignIn().catch(function(){
            $state.go('login');
          });
         },
          courses: function($state, Main){
            return getCourses().$loaded();
          }
        }
       
    })
    // Admin Route

    // .state('admin', {
    //     url:'/admin',
    //     templateUrl:'templates/admin.html',
    //     controller: 'AdminCtrl as adminCtrl',
    //     resolve: {
    //       courses: function (Fill){
    //       return Fill.$loaded();
    //     }
    //   }
       
    // })

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