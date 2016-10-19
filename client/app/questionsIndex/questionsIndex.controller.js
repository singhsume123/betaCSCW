'use strict';

angular.module('betaApp')
  .controller('QuestionsIndexCtrl', function ($scope, $http) {
    $http.get('/api/questions').success(function(questions) {
      $scope.questions = questions;
    });
  });
