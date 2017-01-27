angular.module('masa.workout', [])

.controller('WorkoutCtrl', function($scope){

  // $scope.exercises = [];
  $scope.exercisesExample = [
    {name: 'incline bench', sets: 3, reps: 12, weight: 185},
    {name: 'deadlift', sets: 4, reps: 8, weight: 225},
    {name: 'db thrusters', sets: 3, reps: 12, weight: 30}
  ];

  $scope.addExercise = function(passInFormInputs) {
    $scope.exercises.push({'id':'choice'+newItemNo});
  };

  $scope.saveWorkout = function(){
  	workoutHistory.storeWorkoutHistory($scope.exercises);
  }

});
