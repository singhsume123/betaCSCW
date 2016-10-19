'use strict';

angular.module('betaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('questionsShow', {
        url: '/questions/show/:id',
        templateUrl: 'app/questionsShow/questionsShow.html',
        controller: 'QuestionsShowCtrl'
      });
  });
