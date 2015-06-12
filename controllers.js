var userController = angular.module("userController",[]);

userController.matchIndexByid = function(arr,id){    
    var n;
    arr.forEach(function(item,i,arr){
      if(item.id==id){ n=i};
     },this);
     return n;
    }


userController.controller("addControll",
function($location,$routeParams,$scope){
  $scope.empty=function(){
    //$scope.email="email@test";
    $scope.sex=0;
    $scope.notification=false;
  };
//----------------------------------AddView controller edit and add new user---------------------------- 
 
 $scope.add = function(attr){
  if(attr=="new"){  
   var max = usersApp.users.reduce(function(prev,cur){
    return (prev > +cur.id)?prev:cur.id;    
   },0);
   max++;
   usersApp.users.push({email:$scope.email,password:$scope.password,sex:$scope.sex,notification:$scope.notification,id:""+max});
   $location.path('list');
  } else {      
   var n = userController.matchIndexByid(usersApp.users,$routeParams.id);
   
   usersApp.users[n].sex=$scope.sex;
   usersApp.users[n].notification=$scope.notification;
   usersApp.users[n].email=$scope.email;
   usersApp.users[n].password=$scope.password;
   $location.path('list');
  };
 };

$scope.isEdit=$routeParams.edit==undefined?false:true;

if($scope.isEdit){
   var n = userController.matchIndexByid(usersApp.users,$routeParams.id);
   console.log(n,$routeParams.id);
   $scope.email=usersApp.users[n].email;
   $scope.password=usersApp.users[n].password;
   $scope.sex=usersApp.users[n].sex;
   $scope.notification=usersApp.users[n].notification;

} else {$scope.empty();};

});


//------------------------------List controll delete and edit and send user id's to edit----------------
userController.controller("listControll",function($location,$scope){
 
$scope.sex=['none','male','female'];;
$scope.users=usersApp.users;
 $scope.remove = function(id){
  var new_users = $scope.users.filter(function(item,i,arr){
    return !(id == item.id); 
  });
  $scope.users=new_users;
  usersApp.users=$scope.users.slice();
 };

 $scope.edit = function(id){
    
    $location.path(id+"/true");
    
 };


})



/*
userController.controller("allControll",function($scope){

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
*/