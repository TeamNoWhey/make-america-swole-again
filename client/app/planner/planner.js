var app = angular.module('Planner', []);

app.controller('PlannerCtrl', function($scope){

  // $scope.exercises = [];
  $scope.exercisesExample = [
    {name: 'incline bench', sets: 3, reps: 12, weight: 185},
    {name: 'deadlift', sets: 4, reps: 8, weight: 225},
    {name: 'db thrusters', sets: 3, reps: 12, weight: 30}
  ];

  // $scope.exercises = [1,2,3];
  $scope.newExercise = {};
  $scope.exercises = [];


  $scope.saveWorkout = function(){
  	workoutHistory.storeWorkoutHistory($scope.exercises);
  }

  $scope.add = function() {
    console.log('Hey add button worked!');
    $scope.exercises.push(this.newExercise);
    this.newExercise = {};
    // $scope.workouts.push
    console.log(this.exercises);

  }


//   $timeout (function() {
//     console.log('timeout excercises', this.exercises);
//   }, 15000
// );


// app.factory('addWorkout', function() {
//   this.add = function () {

// }

});
