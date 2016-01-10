// JavaScript source code
angular.module('myApp', [])
    .run(function ($rootScope, $timeout) {

        $timeout(function () {
            $rootScope.myLink = 'http://www.gooogle.com';
            $rootScope.myImage = 'http://bartsimpsonpictures.squarelogic.net/bart-simpson-11.gif';
        }, 2000);
    })
   .controller('myControllers', function ($scope) {

       $scope.generateNumber = function () {

           return Math.floor((Math.random() * 10) + 1);
       }

       $scope.cities = {
           availableOptions: [
           { name: 'Torre�n' },
           { name: 'M�xico' },
           { name: 'Parras' },
           { name: 'Ju�rez' },
           { name: 'Boston' },
           { name: 'Graz' },
           { name: 'Santo Domingo' }
           ],
           selectedOption: { name: 'Parras' }
       };

       $scope.person = {
           name: null
       };

       $scope.people = [];

       $scope.submit = function () {
           if ($scope.person.name) {
               $scope.people.push({ name: $scope.person.name });
               $scope.person.name = "";
           }
       };
   })
