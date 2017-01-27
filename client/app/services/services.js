var app = angular.module('masa.services', [])

app.factory('workoutHistory', function ($http) { // throw into workout planner controller

  // need a post of all the exercises data to the server for storage into the db
  // (stretch) will need to make a GET request to the server for fetching of target weight from the db
  // (stretch) will need to make a GET request to the server in order to fetch a list of all the exercises for autocomplete
  //(probably want to cache this)

  var storeworkoutHistory = function(data){
    return $http({
      method: 'POST',
      url: '/workoutHistory', 
      data: data
    })
    .then(function(res){
      console.log('this is res.data:', res.data)
      return res.data;
    })
  }

  return {
    storeworkoutHistory: storeworkoutHistory
  };
});
//   // var changeViewShorten = function() {
//   //   $scope.changeView = function(view) {
//   //     $location.path(view);
//   //   };
//   // };
// })
// .factory('Auth', function ($http, $location, $window) {
//   // Don't touch this Auth service!!!
//   // it is responsible for authenticating our user
//   // by exchanging the user's username and password
//   // for a JWT from the server
//   // that JWT is then stored in localStorage as 'com.shortly'
//   // after you signin/signup open devtools, click resources,
//   // then localStorage and you'll see your token from the server
//   var signin = function (user) {
//     return $http({
//       method: 'POST',
//       url: '/api/users/signin',
//       data: user
//     })
//     .then(function (resp) {
//       return resp.data.token;
//     });
//   };

//   var signup = function (user) {
//     return $http({
//       method: 'POST',
//       url: '/api/users/signup',
//       data: user
//     })
//     .then(function (resp) {
//       return resp.data.token;
//     });
//   };

//   var isAuth = function () {
//     return !!$window.localStorage.getItem('com.shortly');
//   };

//   var signout = function () {
//     $window.localStorage.removeItem('com.shortly');
//     $location.path('/signin');
//   };


//   return {
//     signin: signin,
//     signup: signup,
//     isAuth: isAuth,
//     signout: signout
//   };
// });
