angular.module('myApp', ['preregCommonDirectives']);

describe('Prereg Client Validation', function() {

    var $compile,
        $rootScope,
        $controller;

    beforeEach( module('myApp') );

    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_.$new();
    }));

    describe('emailCheck', function() {

        it('does email validation', function() {

            $rootScope.customer = { confirmEmail: null, email: null };

            var element = $compile('<form name="form"><input type="email" name="custConfirmEmail" ng:model="customer.confirmEmail" required placeholder="eg. john@sky.com" email-check="{{customer.email}}" server-error/></form>')($rootScope);

            $rootScope.form.custConfirmEmail.$setViewValue('acnalesso@');
            $rootScope.$digest();

            expect($rootScope.form.custConfirmEmail.$valid).toBe(false);
        });

        it('passes email confirmation', function() {

            var element = $compile('<form name="form"><input type="email" name="custEmail" ng:model="customer.email" required placeholder="eg. john@sky.com" /><input type="email" name="custConfirmEmail" ng:model="customer.confirmEmail" required placeholder="eg. john@sky.com" email-check="{{customer.email}}" /></form>')($rootScope);

            $rootScope.form.custEmail.$setViewValue('acnalesso@yahoo.co');
            $rootScope.form.custConfirmEmail.$setViewValue('acnalesso@yahoo.co');

            $rootScope.$digest();

            expect($rootScope.form.custEmail.$valid).toBe(true);
        });

        it('Adds email validate function to parsers', function() {
            var element = $compile('<form name="form"><input type="email" name="custEmail" ng:model="customer.email" required placeholder="eg. john@sky.com" /><input type="email" name="custConfirmEmail" ng:model="customer.confirmEmail" required placeholder="eg. john@sky.com" email-check="{{customer.email}}" /></form>')($rootScope);
            expect($rootScope.form.custEmail.$parsers[0]("a")).toEqual("a");
        });

    });

});