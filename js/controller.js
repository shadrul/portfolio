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
app.controller('MainCtrl', function( $state, stars){
  
  var mainCtrl = this;

  mainCtrl.starlist = stars;

  
  



});
app.controller('AuthCtrl', [ '$state','Auth', function( $state, Auth){

    var authCtrl = this;
    authCtrl.user = {
      email: '',
      password: ''
    };
    authCtrl.login = function (){
      Auth.$signInWithEmailAndPassword(authCtrl.user.email, authCtrl.user.password).then(function (auth){
        $state.go('home');
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
