var app10 = angular.module('app10',[]);

app10.directive("bbPlayerList", function(){
  return function(scope, element, attrs){
    var data = scope[attrs["bbPlayerList"]];

    if(angular.isArray(data)){
      var arrayItem = attrs["arrayItem"];
      var listElem = angular.element("<ul>");
      element.append(listElem);
      for(var i=0; i<data.length; i++){
        listElem.append(angular.element('<li>')
        .text(scope.$eval(arrayItem, data[i])));
      }

      //add span after list
      listElem.after(angular.element("<span id='mays'>").text("Willy Mays"));
      //add span before element
      listElem.prepend(angular.element("<span id='cobb'>").text("Ty Cobb"));
      //remove element
      angular.element(document.querySelector('#mays')).remove();
      //replace element
      var gehrigHTML = "<span id='gehrig'>Lou Gehrig</span>";
      var replacement = angular.element(gehrigHTML);
      angular.element(document.querySelector('#cobb')).replaceWith(replacement);
    }
  }	
});

app10.controller('mainCtrl', function($scope){
 $scope.bbPlayers = [
      {name: "Barry Bonds", avg: 0.298, hr: 762, obp: 0.444},
      {name: "Hank Aaron", avg: 0.305, hr: 755, obp: 0.374},
      {name: "Babe Ruth", avg: 0.342, hr: 714, obp: 0.474},
      {name: "Ted Williams", avg: 0.344, hr: 521, obp: 0.482}
    ];
});
