'use strict';

angular.module('betaApp')
  .controller('QuestionsCreateCtrl', function ($scope, $http, $location, Auth) {
    $scope.submit = function() {
      $http.post('/api/questions', $scope.question).success(function(){
        $location.path('/');
      });
    };
    if(!Auth.isLoggedIn()){
      $location.path('/login');
      $location.replace();
      return;
    }
  });
