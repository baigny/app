//Define an angular module for our app


var app = angular.module('main', ['ui.router','ui.bootstrap']);

app.config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/menu")
        $stateProvider.

        state('menu', {
                url: '/menu',
                views: {
                    'content': {
                        templateUrl: 'templates/main.html',
                        controller: 'mainController'
                    }
                }
            })
            .state('newsurvey', {
                url: '/newsurvey',
                views: {
                    'content': {
                        templateUrl: 'templates/newsurvey.html',
                        controller: 'newsurveyCtrl'
                    }
                }
            })
            .state('quest', {
                url: '/quest/:id',
                views: {
                    'content': {
                        templateUrl: 'templates/questions.html',
                        controller: 'questionsctrl'
                    }
                }
            })
                   .state('modal', {
                                   url: '/modal',
                                   // trigger the modal to open when this route is active
                                   onEnter: ['$stateParams', '$state', '$modal',
                   function ($stateParams, $state, $modal) {
                                           $modal
            
                                           // handle modal open
                                               .open({
                                               templateUrl: 'templates/editmodal.html',
            
                                               controller: 'mainController'
                                           })
            
                                           // change route after modal result
                                           .result.then(function () {
                                               // change route after clicking OK button
                                               $state.transitionTo('mainController');
                                           }, function () {
                                               // change route after clicking Cancel button or clicking background
                                               $state.transitionTo('mainController');
                                           });
            
                   }
                 ]
            
            
                               })
                               .state('modalopt', {
                                   url: '/modalopt',
                                   // trigger the modal to open when this route is active
                                   onEnter: ['$stateParams', '$state', '$modal',
                   function ($stateParams, $state, $modal) {
                                           $modal
            
                                           // handle modal open
                                               .open({
                                               templateUrl: 'templates/addoption.html',
            
                                               controller: 'questionsctrl'
                                           })
            
                                           // change route after modal result
                                           .result.then(function () {
                                               // change route after clicking OK button
                                               $state.transitionTo('questionsctrl');
                                           }, function () {
                                               // change route after clicking Cancel button or clicking background
                                               $state.transitionTo('questionsctrl');
                                           });
            
                   }
                 ]
            
            
                               })
                                 .state('modaleditquest', {
                                   url: '/modaleditquest',
                                   // trigger the modal to open when this route is active
                                   onEnter: ['$stateParams', '$state', '$modal',
                   function ($stateParams, $state, $modal) {
                                           $modal
            
                                           // handle modal open
                                               .open({
                                               templateUrl: 'templates/editquestion.html',
            
                                               controller: 'questionsctrl'
                                           })
            
                                           // change route after modal result
                                           .result.then(function () {
                                               // change route after clicking OK button
                                               $state.transitionTo('questionsctrl');
                                           }, function () {
                                               // change route after clicking Cancel button or clicking background
                                               $state.transitionTo('questionsctrl');
                                           });
            
                   }
                 ]
            
            
                               })
                               .state('modaladdquest', {
                                   url: '/modaladdquest',
                                   // trigger the modal to open when this route is active
                                   onEnter: ['$stateParams', '$state', '$modal',
                   function ($stateParams, $state, $modal) {
                                           $modal
            
                                           // handle modal open
                                               .open({
                                               templateUrl: 'templates/addquestion.html',
            
                                               controller: 'questionsctrl'
                                           })
            
                                           // change route after modal result
                                           .result.then(function () {
                                               // change route after clicking OK button
                                               $state.transitionTo('questionsctrl');
                                           }, function () {
                                               // change route after clicking Cancel button or clicking background
                                               $state.transitionTo('questionsctrl');
                                           });
            
                   }
                 ]
            
            
                               })
                              
                              

                }]);
