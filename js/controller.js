
app.controller('MainCtrl', function($rootScope, $localStorage, $state, Main){
  
  var mainCtrl = this;
  mainCtrl.experiences = [{"id": 1,"organization":"","role":"","from":"","to":"","description":""}];
  mainCtrl.projects = [{"id": 1,"title":"","description":"","link":""}];
  mainCtrl.educations = [{"id": 1,"college":"","degree":"","from":"", "to":"","description":""}];
  mainCtrl.exp_index = mainCtrl.experiences.length;
  mainCtrl.pro_index = mainCtrl.projects.length;
  mainCtrl.edu_index = mainCtrl.educations.length;

  mainCtrl.addNewChoice = function(x) {
    if(x=='e'){
    var newItemNo = ++mainCtrl.exp_index;
    mainCtrl.experiences.push({'id':newItemNo,"organization":"","role":"","from": "","to": "","description":""});
    }
    else if(x=='p'){
      var newItemNo = ++mainCtrl.pro_index;
    mainCtrl.projects.push({'id':newItemNo,"title":"","description":"","link":""});
    }
    else if(x=='edu'){
       var newItemNo = ++mainCtrl.edu_index;
    mainCtrl.educations.push({'id':newItemNo,"college":"","degree":"","from":"", "to":"", "description":""});
    }
    
    
  };
    
  mainCtrl.removeChoice = function(id,x) {
    if(x=='e'){
      var index = -1;
        var comArr = eval( mainCtrl.experiences );
        for( var i = 0; i < comArr.length; i++ ) {
          if( comArr[i].id === id) {
            index = i;
            break;
          }
        }
        if( index === -1 ) {
          alert( "Something gone wrong" );
        }
        mainCtrl.experiences.splice( index, 1 );

    }
    else if(x=='p'){
      var index = -1;
        var comArr = eval( mainCtrl.projects );
        for( var i = 0; i < comArr.length; i++ ) {
          if( comArr[i].id === id) {
            index = i;
            break;
          }
        }
        if( index === -1 ) {
          alert( "Something gone wrong" );
        }
        mainCtrl.projects.splice( index, 1 );
    }
    else if(x=='edu'){
      var index = -1;
        var comArr = eval( mainCtrl.educations );
        for( var i = 0; i < comArr.length; i++ ) {
          if( comArr[i].id === id) {
            index = i;
            break;
          }
        }
        if( index === -1 ) {
          alert( "Something gone wrong" );
        }
        mainCtrl.educations.splice( index, 1 );
    }

  
        
  };

//   function monthDiff(d1, d2) {
//     var months;
//     months = (d2.getFullYear() - d1.getFullYear()) * 12;
//     months -= d1.getMonth();
//     months += d2.getMonth();
//     return months <= 0 ? 0 : months;
// }

  // mainCtrl.demo = function(){
  //   var json_data = {
  //           'user_name': mainCtrl.user.user_name,
  //           'first_name':mainCtrl.user.first_name,
  //           'last_name': mainCtrl.user.last_name,
  //           'email': mainCtrl.user.email,
  //           'mobile': mainCtrl.user.mobile,
  //           'about': mainCtrl.user.about,
  //           'experiences': mainCtrl.experiences,
  //           'projects':mainCtrl.projects,
  //           'educations':mainCtrl.educations
  //       }
  //       console.log(json_data);
  //       // console.log(monthDiff(mainCtrl.experiences[0].from, mainCtrl.experiences[0].to));

  // };



  mainCtrl.submit = function(){
    var json_data = {
            'user_name': mainCtrl.user.user_name,
            'first_name':mainCtrl.user.first_name,
            'last_name': mainCtrl.user.last_name,
            'email': mainCtrl.user.email,
            'mobile': mainCtrl.user.mobile,
            'about': mainCtrl.user.about,
            'experiences': mainCtrl.experiences,
            'projects':mainCtrl.projects,
            'educations':mainCtrl.educations
        }

        Main.submitDetails(json_data)
        .then(function(response){
            console.log(response);
            $state.go('portfolio', {user_name : mainCtrl.user.user_name});
            // if(response.data.payroll_data[0].dbName){
            //     console.log(json_data); 
            //     document.getElementById('compname').style.display = 'none';
            //     document.getElementById('shadrul').style.display = 'block';
            // }
        }).catch(function(response){
          console.log(response);

        });


  };
  // $localStorage.logged = checkauth;
  // $rootScope.islogged = $localStorage.logged;
  // console.log(mainCtrl.islogged);
  // mainCtrl.starlist = stars;
  // mainCtrl.courselist = courses;
  // mainCtrl.logout = function(){
  //     console.log("loghoyut");
  //     Auth.$signOut().then(function(){
  //      $$localStorage.logged ='';
  //      $state.reload(); 
  //     });
  //   };
  // mainCtrl.username = Users.getDisplayName(mainCtrl.islogged);

 
});

app.controller('PortfolioCtrl', function($rootScope, $localStorage, $anchorScroll, $location, $state, getdata){
  
  var portfolioCtrl = this;
 portfolioCtrl.gotoDiv = function(x) {

    var newHash =  x;

    if ($location.hash() !== newHash) {

      $location.hash( x);

    } else {

      $anchorScroll();

    }

  };


  console.log("hi");

  portfolioCtrl.user = getdata.data;
  console.log(portfolioCtrl.user);
});


