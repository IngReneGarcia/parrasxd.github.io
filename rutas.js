// JavaScript source code
angular.module('myApp', ['ngRoute', 'formly','formlyBootstrap'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'mainController'
            })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'aboutController'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'contactController as cr'
        })
        .when('/countries', {
            templateUrl: 'views/countries.html',
            controller: 'countriesController'
        })
         .when('/detail', {
             templateUrl: 'views/detail.html',
             controller: 'detailController'
         })
        .otherwise({
            //redirectTo:"404"
            templateUrl: 'views/404.html'
        })
    })

    .factory('countryService', function ($http, $rootScope) {
        var country = {};
        country.data = [];
        //$scope.loadData = false;
        $http({
            method: 'GET',
            url: 'https://restcountries.eu/rest/v1/all'

        }).then(function (obj) {

            country.data = obj.data;
            //$scope.loadData = true;
            $rootScope.$broadcast('loadDataFinish');
        }, function (error) {
            console.log(error);
        });

        return country;
    })

    .factory('loadAlert', function () {
        var button = {};
        button.greeting = function () {
            alert("Hola mundo");
        }
        return button;
    })

    .directive('sayHi', function () {
        return {
            restrict: 'AE',
            replace: true,
            template: "<button ng-click='greeting()'>Click me!</button>"
            //templateUrl: 'button/buttonAlert.html'
        }
    })

    .controller('mainController', function ($scope, loadAlert) {//, countryService) {
        $scope.message = 'Bienvenidos al sitio ';// + countryService.country.name + '!';
        $scope.greeting = loadAlert.greeting;
    })

    .controller('aboutController', function ($scope) {
        $scope.message = 'SOY EL acerca de !'
    })

    .controller('contactController', function ($scope) {
        var cr = this;
        cr.user = {};
        console.log("hola");
        cr.userDate = [
            {
                key: 'fullName',
                type: 'input',
                templateOptions: {
                    type: "text",
                    label: 'Nombre Completo',
                    placeholder: 'Escribe tu nombre completo',
                    required: true
                }
            },
            {
                key: 'email',
                type: 'input',
                templateOptions: {
                    type: "email",
                    label: 'Correo electronico',
                    placeholder: 'Escribe tu correo',
                    required: true
                }
            },
            {
                key: 'moreInfo',
                type: 'checkbox',
                templateOptions: {
                    label: "¿Deseas recibir más información?"
                }
            }
        ];
        // $scope.message = 'SOY EL Contacto!'
    })

    .controller('countriesController', function ($scope, $location, countryService) {
        $scope.message = 'Lista Paises';
        $scope.loadData = false;

        assignData = function () {
            $scope.cities = countryService.data;
            $scope.loadData = true;
        }

        $scope.$on('loadDataFinish', function () {
            assignData();
        });

        assignData();

        $scope.city = {};
        $scope.getCity = function (city) {
            $scope.city = city;
        }


        $scope.showDetail = function (detail) {
            countryService.country = detail;

            $location.path('/detail');

        }
    })

    .controller('detailController', function ($scope, countryService) {
        $scope.city = countryService.country;
    })
