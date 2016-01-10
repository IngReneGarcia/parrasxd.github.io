// JavaScript source code
angular.module('myApp', [])
    //.run(function ($rootScope,$timeout) {
    //    $timeout(function () {
    //        $rootScope.loadTable
    //    }, 3000);
    //})
    .controller('myControllers', function ($scope, $http) {
        $http({
            method: 'GET',
            url: 'https://restcountries.eu/rest/v1/all'

        }).then(function (obj) {
            console.log(obj.data, obj.data[0].name, obj.data[0].capital);
            $scope.cities = obj.data;
        }, function (error) {
            console.log(error);
        });

        $scope.city = {};
        $scope.getCity = function (city) {
            $scope.city = city;

        }
    })