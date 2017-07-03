angular.module("myApp")
    .service("profilesrc",function($http){
    
        this.getprofile = function(){
            return $http.get("http://localhost:3000/person") 
                    .then(function(response){
                
                    return response.data;
                
            })
        
        }
        this.updateprofile = function(id){
                return $http.put("http://localhost:3000/person/id",)
            }
    
})
