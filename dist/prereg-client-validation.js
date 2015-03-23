'use strict';

var preregCommonDirectives = angular.module('preregCommonDirectives', []);

preregCommonDirectives.directive('emailCheck', [
    function() {

        var link = function($scope, $element, $attrs, ctrl) {

            var validate = function(viewValue) {
                var comparisonModel = $attrs.emailCheck;
                if(!viewValue || !comparisonModel){
                    ctrl.$setValidity('emailCheck', true);
                }

                ctrl.$setValidity('emailCheck', viewValue == comparisonModel );
                return viewValue;
            };

            ctrl.$parsers.unshift(validate);
            ctrl.$formatters.push(validate);

            $attrs.$observe('emailCheck', function(comparisonModel){
                return validate(ctrl.$viewValue);
            });

        };

        return {
            require: 'ngModel',
            link: link
        };

    }
]);

preregCommonDirectives.directive('postcodeValidate', [
    function() {

        var link = function($scope, $element, $attrs, ctrl) {

            var validate = function(viewValue) {

                var regex = new RegExp("^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))){0,1}[0-9][A-Za-z]{2})$");

                ctrl.$setValidity('postcodeValidate', regex.test(viewValue));
                return viewValue;
            };

            ctrl.$parsers.unshift(validate);
            ctrl.$formatters.push(validate);

            $attrs.$observe('postcodeValidate', function(){
                return validate(ctrl.$viewValue);
            });

        };

        return {
            require: 'ngModel',
            link: link
        };

    }
]);

preregCommonDirectives.directive('nameValidate', [
    function() {

        var link = function($scope, $element, $attrs, ctrl) {

            var validate = function(viewValue) {

                var regex = new RegExp("^[ A-Za-zÁÉÍÓÚáéíóú'-]{2,40}$");

                ctrl.$setValidity('nameValidate', regex.test(viewValue));
                return viewValue;
            };

            ctrl.$parsers.unshift(validate);
            ctrl.$formatters.push(validate);

            $attrs.$observe('nameValidate', function(){
                return validate(ctrl.$viewValue);
            });

        };

        return {
            require: 'ngModel',
            link: link
        };

    }
]);


preregCommonDirectives.directive('houseValidate', [
    function() {

        var link = function($scope, $element, $attrs, ctrl) {

            var validate = function(viewValue) {

                var regex = new RegExp("^[-A-Za-z0-9 &',./]*$");

                ctrl.$setValidity('houseValidate', regex.test(viewValue));
                return viewValue;
            };

            ctrl.$parsers.unshift(validate);
            ctrl.$formatters.push(validate);

            $attrs.$observe('houseValidate', function(){
                return validate(ctrl.$viewValue);
            });

        };

        return {
            require: 'ngModel',
            link: link
        };

    }
]);

preregCommonDirectives.directive('contactnumberValidate', [
    function() {

        var link = function($scope, $element, $attrs, ctrl) {

            var validate = function(viewValue) {

                var regex = new RegExp("^[0-9]{10,15}$");

                ctrl.$setValidity('contactnumberValidate', regex.test(viewValue));
                return viewValue;
            };

            ctrl.$parsers.unshift(validate);
            ctrl.$formatters.push(validate);

            $attrs.$observe('contactnumberValidate', function(){
                return validate(ctrl.$viewValue);
            });

        };

        return {
            require: 'ngModel',
            link: link
        };

    }

]);


preregCommonDirectives.directive('serverError',[
    function(){

        var link = function($scope, $element, $attrs, $ctrl) {
            $element.on('change',function(){
                $scope.$apply(function(){
                    $ctrl.$setValidity('server', true)
                })
            });
        };

        return {
            require: 'ngModel',
            link:link
         };

    }
]);
