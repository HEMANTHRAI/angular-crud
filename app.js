var app = angular.module("myApp",[]);
app.controller("profilectrl",function(profilesrc){
    var self = this;
    self.editvalue = false;
     profilesrc.getprofile().then(function(data){
        
       self.data = data;
         console.log(self.data)
        
    },function(){
         self.erromsg = "maybe you need to run the json-server"
     })
    
     self.onePerson =function(oneperson){
         self.oneguy = oneperson;
     }
    
     self.editprofile = function(){
         self.editvalue = !self.editvalue;
         
     }
})