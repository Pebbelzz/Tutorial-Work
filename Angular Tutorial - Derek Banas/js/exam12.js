var app12 = angular.module('app12',[]);

app12.directive("exDir", function(){
  return{
    transclude: true,
    template: "<div><h4>{{morelorem}}</h4></div><div ng-transclude></div>"
  };
});

app12.controller('mainCtrl', function($scope){
  $scope.morelorem = "The Amazing Lorem Story";
});
