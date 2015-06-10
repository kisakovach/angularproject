var app = angular.module("myUsers",[]);

app.controller("userControll",function($scope){

 $scope.isEdit=false;
 $scope.empty_forms=function(){
 
  $scope.name="";
  $scope.surname="";
  $scope.email="";

 }


 $scope.users=[{name:"first name", surname:"last name",email:"test@email.com",id:"6"},
               {name:"dsaasfr", surname:"ffsdfd",email:"test@email.com",id:"1"},
               {name:"fidsaame", surname:"ladasde",email:"test@email.com",id:"10"},
               {name:"name", surname:"last",email:"test@email.com",id:"3"},
               {name:"first", surname:"aste",email:"test@email.com",id:"9"}
               ];

 $scope.add = function(attr){
  if(attr=="new"){  
   var max = $scope.users.reduce(function(prev,cur){
   return (prev > +cur.id)?prev:cur.id;    
   },0);
   max++;
   $scope.users.push({name:$scope.name,surname:$scope.surname,email:$scope.email,id:""+max});
   $scope.empty_forms();
  } else {      
   $scope.users[$scope.edit_num].name=$scope.name;
   $scope.users[$scope.edit_num].surname=$scope.surname;
   $scope.users[$scope.edit_num].email=$scope.email;
   $scope.empty_forms();
   $scope.isEdit=false;
  };
 };

 $scope.remove = function(id){
  var new_users = $scope.users.filter(function(item,i,arr){
    return !(id == item.id); 
  });
  $scope.users=new_users; 
 };

 $scope.edit = function(id){
    var n;
    $scope.users.forEach(function(item,i,arr){
      if(item.id==id){ n=i};
     },this);

    $scope.name=$scope.users[n].name;
    $scope.surname=$scope.users[n].surname;
    $scope.email=$scope.users[n].email;
    $scope.edit_num=n;
    $scope.isEdit=true;
 };

});