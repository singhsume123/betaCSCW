'use strict';

angular.module('betaApp.auth', [
  'betaApp.constants',
  'betaApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
