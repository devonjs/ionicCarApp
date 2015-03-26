angular.module('car.controllers', ['firebase'])
    .controller('CarsCtrl', function ($scope, $firebase) {
        // Link to our firebase database
        var ref = new Firebase("https://ioniccarapp.firebaseio.com");

        // Create an access variable for the firebase data
        var sync = $firebase(ref);

        // Retrieve the data as an Array, and place in the scope
        $scope.myList = sync.$asArray();
        //$scope.myList = $firebaseArray(ref);

        $scope.car = {};
        //console.log($scope.myList);
        // Create a function addPerson, to handle the submit button being pressed
        $scope.addCar = function () {
            // Add the person created in the html page to my list
            $scope.myList.$add($scope.car);
            // Clear the data in person; so the fields in the html page are emptied
            $scope.car = {};
        }
    }
);
