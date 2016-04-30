var app9 = angular.module('app9', []);

app9.directive("jqlDirective", function(){
  return function($scope, element, attrs){
    var players = element.children();

    var listOfPlayers = "";

    for(i = 0; i < players.length; i++){
      if(players.eq(i).text() == "Barry Bonds"){
        players.eq(i).css("color", "red");

        players.eq(i).attr("number", "25");
      }

      if(players.eq(i).text()== "Hank Aaron"){
        players.eq(i).addClass("thick");
      }

      listOfPlayers += players.eq(i).text() + " , ";

      angular.element(document.querySelector('#childrenList')).text(listOfPlayers);

      var barrysNum = angular.element(document.querySelector("#barry")).attr("number");

      angular.element(document.querySelector("#barrysNumber")).text(barrysNum);

      //removing a class
      angular.element(document.querySelector('#hank')).removeClass("thick");

      //check to see if element has a class
      var isHankBold = angular.element(document.querySelector("#hank")).hasClass("thick");
      angular.element(document.querySelector("#hankBold")).text(isHankBold);

      //get value of property and set value
      var barryID = angular.element(document.querySelector("#barry")).prop("id");
      angular.element(document.querySelector("#barry")).text(barryID);
    }
  }
})

app9.controller("mainCtrl", function($scope){
    //toggle a class
    $scope.unBold = function(){
      angular.element(document.querySelector("#hank")).toggleClass("thick");
    }
});
