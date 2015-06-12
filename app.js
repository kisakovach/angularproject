var usersApp  = angular.module("usersApp",['ngRoute','userController']);

usersApp.config(['$routeProvider',function($routeProvider){
 
$routeProvider.when("/",{
  templateUrl: "views/add.html",
  controller:"addControll"
 });

$routeProvider.when("/:id/:edit",{
  templateUrl: "views/add.html",
  controller:"addControll"
 });


$routeProvider.when("/list",{
  templateUrl: "views/list.html",
  controller:"listControll"
 });  

$routeProvider.otherwise({redirectTo: '/'});

}]);



usersApp.users=[];