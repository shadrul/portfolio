

app.service('Main', function($http){
     this.submitDetails = function(json_data){
        return $http({
            method:'post',
            data:json_data,
            url:'http://127.0.0.1:5000/add_user'
        });
    }  
});

app.service('Portfolio', function($http){
     this.getData = function(user_name){
        return $http({
            method:'get',
            url:'http://127.0.0.1:5000/get_user/' + user_name 
        })
    }
});




