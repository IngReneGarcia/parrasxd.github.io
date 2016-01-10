// JavaScript source code
angular.module('myApp', [])
    .controller('ctrlGreetings', function ($scope, $filter) {

        $scope.name = "Parras";
        $scope.today = new Date();

        $scope.greeting = function () {
            console.log("greetings program!!");
        }

        $scope.setLowerCase = $filter('lowercase')('PANCHO Pantera');

        $scope.isCapitalized = function (str) {
            var res = str[0] == str[0].toUpperCase();
            return res;
        }

        $scope.Capitalized = function () {
            var res = null;
            var cad = str.split(' ');
            for (var i = 0 ; i < cad.length; i++)
                if (cad[i][0] == cad[i][0].toLowerCase())
                    res = cad[i].toUpperCase();

            return res;
        }

        $scope.blankIfNegative = function (num) {
            var res = null;
            if (parseInt(num) < 0)
                res = ' ';
            //else
            //    res = num;
            return res;
        }
    })
    .controller('myClock', function ($scope) {
        $scope.clock = {
            now: new Date()
        };

        var updateClock = function () {
            $scope.clock.now = new Date();
        }

        setInterval(function () {
            $scope.$apply(updateClock);
        }, 1000);
    })
    .controller('myCalculator', function ($scope) {
        // var number1 = parseFloat(document.getElementById("numero1").value);
        //var number2 = parseFloat(document.getElementById("numero2").value);
        $scope.resultado;
        /*
        $scope.suma = function () {
            var number1 = parseFloat(document.getElementById("numero1").value);
            var number2 = parseFloat(document.getElementById("numero2").value);
            $scope.resultado;
            $scope.resultado = parseInt(number1) + parseInt(number2);
        }

        $scope.resta = function () {
            var number1 = parseFloat(document.getElementById("numero1").value);
            var number2 = parseFloat(document.getElementById("numero2").value);
            $scope.resultado;
            $scope.resultado = parseInt(number1) - parseInt(number2);
        }

        $scope.multiplica = function () {
            var number1 = parseFloat(document.getElementById("numero1").value);
            var number2 = parseFloat(document.getElementById("numero2").value);
            $scope.resultado;
            $scope.resultado = parseInt(number1) * parseInt(number2);
        }

        $scope.divide = function () {
            var number1 = parseFloat(document.getElementById("numero1").value);
            var number2 = parseFloat(document.getElementById("numero2").value);
            $scope.resultado;
            $scope.resultado = parseFloat(number1) / parseFloat(number2);
            //document.getElementById("resultado").innerHTML =
        }
        */
        $scope.operacion = function (op) {
            //var number1 = parseFloat(document.getElementById("numero1").value);
            //var number2 = parseFloat(document.getElementById("numero2").value);
            number1 = parseFloat($scope.numero1);
            number2 = parseFloat($scope.numero2);

            switch (op) {
                case '+': { $scope.resultado = number1 + number2; } break;
                case '-': { $scope.resultado = number1 - number2; } break;
                case '*': { $scope.resultado = number1 * number2; } break;
                case '/': { $scope.resultado = number1 / number2; } break;
            }

        }

        $scope.showData = function () {
            console.log(numero1)
            $scope.resultado = $scope.resultado = number1 + number2;
        }

    })
    .filter('blankIfNegative', function () {
        return function (input) {
            if (input <= 0)
                return 'NaN';
            else
                console.log(input);
        }
    })
    .filter('capitalize', function () {
        return function (input) {
            var res = null;
            //var cad = input.split(' ');
            //for (var i = 0 ; i < cad.length; i++)
            //    if (cad[i][0] == cad[i][0].toLowerCase()) {
            res = input[0].toUpperCase() + input.slice(1);
            //}
            return res;
        }
    })
    .directive('myLogin', function () {  // el nombre que tenga la directiva si es en formato camelCase en la etiqueta Html debera ser my-Login
        return {
            //restrict: 'A',
            //restrict: 'E',
            restrict: 'AEM',
            replace: true,
            scope:{
                userName:'@'
            },
            template: '\
                <div> \
                <div>Acceso de usuario</div> \
                <input type="text" value = "{{ userName }}" placeholder= "Usuario..."\> \
                <input type="password" placeholder = "Password..."\> \
                <button>Enviar</button> \
                </div>\
            '
        }
    })