'use strict';

angular.module('betaApp')
  .filter('fromNow', function () {
    return function (input) {
      return moment(input).locale(window.navigator.language).fromNow();
    };
  });
