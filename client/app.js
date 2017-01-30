var app = angular.module ('FitnessApp', ['Home', 'Planner', 'Auth', 'ngRoute']);

app.config(function($routeProvider, $locationProvider, $httpProvider)  {
  $routeProvider
    .when('/home', {
      templateUrl: 'app/home/home.html',
      controller: 'HomeCtrl',
      // authenticate: true
    })
    .when('/signin', {
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthCtrl'

    })
    .when('/planworkout', {
      templateUrl: 'app/planner/planworkout.html',
      controller: 'PlannerCtrl',
      // authenticate: true
    })
    .when('/history', {
      templateUrl: 'app/history/history.html',
      controller: 'HistoryCtrl'
    })
    .otherwise({
      redirectTo: '/home'
    });

  //This makes Angular routing links look clean, without the #.
  $locationProvider.html5Mode(true);

})


// app.controller('FitnessAppCtrl', function($scope) {

//   //Empty in case it's needed for something
// });