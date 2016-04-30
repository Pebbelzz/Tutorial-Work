 var app3 = angular.module('app3', []);

 app3.controller('gList', function($scope){

   $scope.groceries=[
     {item: "Tomatoes", purchaced: false},
     {item: "Potatoes", purchaced: false},
     {item: "Hummus", purchaced: false},
     {item: "Bread", purchaced: false},
   ];

   $scope.getList = function(){
     return $scope.showList ? "ulgrocerylist.html" : "grocerylist.html";
   }
 });
