'use strict';

angular.module('betaApp')
  .controller('QuestionsCreateCtrl', function ($scope, $http, $location) {
    $scope.submit = function() {
      $http.post('/api/questions', $scope.question).success(function(){
        $location.path('/');
      });
    };
  });
