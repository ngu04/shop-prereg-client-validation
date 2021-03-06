'use strict';

var preregCommonDirectives = angular.module('preregCommonDirectives', []);

preregCommonDirectives.directive('selectValidate', [
  function() {
    var link = function ($scope, $element, $attrs, ctrl) {
      var validate = function (viewValue) {
        ctrl.$setValidity('selectValidate', viewValue !== '?')
        return viewValue;
      };

      ctrl.$parsers.unshift(validate);
      $element.bind('blur', function() {
        ctrl.$touched = true;
        $scope.$apply();
      });
    }

    return {
        require: 'ngModel',
        link: link
    };
  }
]);

preregCommonDirectives.directive('emailCheck', [
    function() {

        var link = function($scope, $element, $attrs, ctrl) {


            var validate = function(viewValue) {
                var comparisonModel = $attrs.emailCheck;

                ctrl.$setValidity('emailCheck', viewValue === comparisonModel );
                return viewValue;
            };

            ctrl.$parsers.unshift(validate);

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

            var regex = new RegExp("^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))){0,1}[0-9][A-Za-z]{2})$");

            var validate = function(viewValue) {
                ctrl.$setValidity('postcodeValidate', regex.test(viewValue));
                return viewValue;
            };

            ctrl.$parsers.unshift(validate);

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

            var regex = new RegExp("^[ A-Za-zÁÉÍÓÚáéíóú'-]{2,40}$");

            var validate = function(viewValue) {
                ctrl.$setValidity('nameValidate', regex.test(viewValue));
                return viewValue;
            };

            ctrl.$parsers.unshift(validate);

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

            var regex = new RegExp("^[-A-ZÁÉÍÓÚáéíóúa-z0-9 &',./]*$");

            var validate = function(viewValue) {
                ctrl.$setValidity('houseValidate', regex.test(viewValue));
                return viewValue;
            };

            ctrl.$parsers.unshift(validate);

        };

        return {
            require: 'ngModel',
            link: link
        };

    }
]);

preregCommonDirectives.directive('contactNumberValidate', [
    function() {

        var link = function($scope, $element, $attrs, ctrl) {

            var regex = new RegExp("^[0-9]{10,15}$");

            var validate = function(viewValue) {

                if (viewValue === "" || viewValue === null || viewValue === undefined) {
                   ctrl.$setValidity('contactNumberValidate', true);
                   return viewValue;
                }

                ctrl.$setValidity('contactnumberValidate', regex.test(viewValue));
                return viewValue;
            };

            ctrl.$parsers.unshift(validate);
        };

        return {
            require: 'ngModel',
            link: link
        };

    }

]);
