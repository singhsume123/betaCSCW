'use strict';

angular.module('betaApp')
  .controller('QuestionsShowCtrl', function ($scope, $http, $stateParams, Auth, $location) {
    $scope.deleteQuestion = function() {
      $http.delete('/api/questions/' + $stateParams.id).success(function(){
        $location.path('/');
      });
    };
    $scope.deleteAnswer = function(answer) {
      $http.delete('/api/questions/' + $stateParams.id + '/answers/' + answer._id).success(function(){
        loadQuestions();
      });
    };  
    $scope.updateQuestion = function() {
      $http.put('/api/questions/' + $stateParams.id, $scope.question).success(function(){
        loadQuestions();
      });
    };
    $scope.updateAnswer = function(answer) {
      $http.put('/api/questions/' + $stateParams.id + '/answers/' + answer._id, answer).success(function(){
        loadQuestions();
      });
    };
    $scope.isOwner = function(obj){
      return Auth.isLoggedIn() && obj && obj.user && obj.user._id === Auth.getCurrentUser()._id;
    };
  
    var loadQuestions = function(){
      $http.get('/api/questions/' + $stateParams.id).success(function(question) {
        $scope.question = question;
      });
    };
    loadQuestions();
    $scope.newAnswer = {};
    $scope.submitAnswer = function() {      
      $http.post('/api/questions/' + $stateParams.id + '/answers', $scope.newAnswer).success(function(){
        loadQuestions();
        $scope.newAnswer = {};
        window.location.href=window.location.href;
      });
    };
  })
  .directive("answerlks", function(){
    return {
      link: function(scope, element, attrs) {
        attrs.$observe('contenttxt', function(contenttxt) {
          transformLink(element, contenttxt);
        });
      }
    };
  });


  function transformLink(element, content){
    var myRegexp = /((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?/gm;
    var match = myRegexp.exec(content);
    while (match != null) {
      $(element).show();
      element.append("<iframe width='560' height='315' src='https://www.youtube.com/embed/" + match[5] + "' frameborder='0' allowfullscreen></iframe> <br/>");
      match = myRegexp.exec(content);
    }
  }
