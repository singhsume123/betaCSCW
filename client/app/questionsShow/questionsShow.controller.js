'use strict';

angular.module('betaApp')
  .controller('QuestionsShowCtrl', function ($scope, $http, $stateParams) {
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
