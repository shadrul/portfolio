app.service('Auth',['$firebaseAuth', function($firebaseAuth){

    var auth = $firebaseAuth();
    return auth;

}]);

app.service('Stars', function($firebaseArray, $firebaseObject){
  var starRef = firebase.database().ref('OurStars');
  var stars = $firebaseArray(starRef);
  
  angular.forEach(stars, function(star) {
    console.log(star.name);
  });
  return stars;
});

// app.service('Users', function($firebaseArray, $firebaseObject){
//     var usersRef = firebase.database().ref('users');
//     var users = $firebaseArray(usersRef);
//     var connectedRef = firebase.database().ref('.info/connected');

//     var Users = {
//         getProfile: function(uid){
//             return $firebaseObject(usersRef.child(uid));
//         },
//           getDisplayName: function(uid){
//             return users.$getRecord(uid).displayName;
//         },
//         getGravatar: function(uid){
//           return '//www.gravatar.com/avatar/' + users.$getRecord(uid).emailHash;
//         },
//         setOnline: function(uid){
//           var connected = $firebaseObject(connectedRef);
//           var online = $firebaseArray(usersRef.child(uid+'/online'));

//           connected.$watch(function (){
//             if(connected.$value === true){
//               online.$add(true).then(function(connectedRef){
//                 connectedRef.onDisconnect().remove();
//               });
//             }
//           });
//         },
//         all:users
//     };


//     return Users;
//   });
// app.service('Channels', function($firebaseArray){
//     var ref = firebase.database().ref('channels');
//     var channels = $firebaseArray(ref);

//     return channels;
// });
// app.service('Messages', function($firebaseArray){
//     var channelMessagesRef = firebase.database().ref('channelMessages');
//     var userMessagesRef = firebase.database().ref('userMessages')

//     return {
//       forChannel: function(channelId){
//         return $firebaseArray(channelMessagesRef.child(channelId));
//       },
//       forUsers: function(uid1, uid2){
//         var path = uid1 < uid2 ? uid1+'/'+uid2 : uid2+'/'+uid1;

//         return $firebaseArray(userMessagesRef.child(path));
//       }

//     };
// });