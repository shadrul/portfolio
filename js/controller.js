// app.run(['$rootScope', '$location', '$cookies', '$state', '$window', function($rootScope, $location, $cookies, $state,$window){
//         $rootScope.username = '';

//         var isuser = false;        

//         if($cookies.get('username')){
            
//             console.log("user")
//             isuser = true;
//         }else{
//             console.log("not isn user");
//             isuser = false;
//         }

//         console.log($location.path());
        
//         if(isuser){
//             console.log(isuser);
//             if($location.path()=='/'){
//                   $location.path('main/home');
//                 // $window.location.reload('main/home');
//             }else{
//                 $location.path($location.path());
//             }
            
//         }else{
//             $location.path('/');
//         }

// }]);

app.controller('NavCtrl', function($scope, Auth, $localStorage, $state){
  $scope.logout = function(){
      console.log("loghoyut");
      Auth.$signOut().then(function(){
       $localStorage.logged ='';
       $state.go('main'); 
      });
    };
});


app.controller('MainCtrl', function($rootScope, $localStorage, $state, stars, courses, checkauth, Users, Auth){
  
  var mainCtrl = this;
  $localStorage.logged = checkauth;
  $rootScope.islogged = $localStorage.logged;
  console.log(mainCtrl.islogged);
  mainCtrl.starlist = stars;
  mainCtrl.courselist = courses;
  mainCtrl.logout = function(){
      console.log("loghoyut");
      Auth.$signOut().then(function(){
       $$localStorage.logged ='';
       $state.reload(); 
      });
    };
  // mainCtrl.username = Users.getDisplayName(mainCtrl.islogged);

 
});

app.controller('CourseCtrl', function($rootScope, $localStorage, $state, $stateParams, courses, checkauth, Auth){
  
  var courseCtrl = this;
  $rootScope.islogged = $localStorage.logged;
  // courseCtrl.islogged = checkauth;
  courseCtrl.courselist = courses;
  angular.forEach(courseCtrl.courselist, function(course){
    if(course.title == $stateParams.courseName){
      console.log(course.$id);
    }
  });
  

});
app.controller('CheckoutCtrl', function($rootScope,$localStorage, $state, $stateParams, courses, Auth){
  
  var checkoutCtrl = this;
  $rootScope.islogged = $localStorage.logged;
  checkoutCtrl.courselist = courses;
  angular.forEach(checkoutCtrl.courselist, function(course){
    if(course.title.toUpperCase() == $stateParams.courseName.toUpperCase()){
      checkoutCtrl.course = course;
    } 
  });

});

// To fill data in the courses list

// app.controller('AdminCtrl', function( $state, courses){
//   var adminCtrl = this;
//   adminCtrl.courses = courses;

//   adminCtrl.fillData = function(){
//       adminCtrl.courses.$add(adminCtrl.course).then(function(ref){
//         console.log(adminCtrl.courses);
//         adminCtrl.course ={
//           title:"",
//           description :""
//         };
//       });
//     };

// });

app.controller('AuthCtrl', [ '$state','Auth', function( $state, Auth){
    var authCtrl = this;
    authCtrl.user = {
      email: '',
      name: '',
      number: ''
    };
    authCtrl.password = '';
    authCtrl.signup = function(){
      Auth.$createUserWithEmailAndPassword(authCtrl.user.email, authCtrl.password).then(function (auth){
        authCtrl.user.loggedin = true;
        console.log("Created" + auth.uid + "successfully");
        var user_ref = firebase.database().ref('UserInfo/' + auth.uid);
        user_ref.set(
          authCtrl.user
        ).then(function(){
          $state.go('main');
          
        });
         

      }, function(error){
        authCtrl.error = error;
      })
    };
    authCtrl.login = function (){
      Auth.$signInWithEmailAndPassword(authCtrl.login.email, authCtrl.login.password).then(function (auth){
        $state.go('main');
      }, function (error){
        authCtrl.error = error;
      });
    };



}]);
// app.controller('HomeCtrl', [ '$state','Auth', function( $state, Auth){

    

// }]);

// app.controller('ProfileCtrl', function($state, md5, auth, profile){
//     var profileCtrl = this;
//     profileCtrl.profile = profile;
//     profileCtrl.updateProfile = function(){
//       profileCtrl.profile.emailHash = md5.createHash(auth.email);
//       profileCtrl.profile.$save().then(function(){
//         $state.go('channels');
//       });
//     };

// });

// app.controller('ChannelsCtrl', function($state, Auth, Users, profile, channels){
//     var channelsCtrl = this;
//     channelsCtrl.profile = profile;
//     channelsCtrl.channels = channels;
//     channelsCtrl.getDisplayName = Users.getDisplayName;
//     channelsCtrl.getGravatar = Users.getGravatar;
//     channelsCtrl.users = Users.all;
//     Users.setOnline(profile.$id);
//     channelsCtrl.logout = function(){
//       channelsCtrl.profile.online = null;
//       channelsCtrl.profile.$save().then(function(){
//         Auth.$signOut().then(function(){
//           $state.go('home');
//         });
//       });
//     };
//     channelsCtrl.newChannel = {
//       name: ''
//     };
//     channelsCtrl.createChannel = function(){
//       channelsCtrl.channels.$add(channelsCtrl.newChannel).then(function(ref){
//         console.log(channelsCtrl.channels);
//         $state.go('channels.messages', {channelId: ref.key});
//       });
//     };

// });

// app.controller('MessagesCtrl', function(profile, channelName, messages){
//     var messagesCtrl = this;
//     messagesCtrl.messages = messages;
//     messagesCtrl.channelName = channelName;
//     messagesCtrl.message = '';
//     messagesCtrl.sendMessage = function (){
//       if(messagesCtrl.message.length > 0){
//         messagesCtrl.messages.$add({
//           uid: profile.$id,
//           body: messagesCtrl.message,
//           timestamp: firebase.database.ServerValue.TIMESTAMP
//         }).then(function (){
//           messagesCtrl.message = '';
//         });
//       }
//     };
// });
