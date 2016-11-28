'use strict';

angular.module('betaApp')
  .controller('QuestionsIndexCtrl', function ($scope, $http, $location, Auth, query) {
    var keyword = $location.search().keyword;
    if(keyword){
      query = _.merge(query, {$text: {$search: keyword}});
    }
    console.log(query);
    $http.get('/api/questions', {params: {query: query}}).success(function(questions) {
      $scope.questions = questions;
    });
  });
