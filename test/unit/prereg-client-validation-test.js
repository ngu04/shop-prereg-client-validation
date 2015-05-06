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

    describe('selectValidate', function() {

        it('is not valid', function() {
            $rootScope.customer = { typeOfProperty: null };
            $rootScope.typeOfProperties = ['Detached', 'Semi-detached'];

            var element = $compile('<form name="form"><select name="custProperty" ng:model="customer.typeOfProperty" required select-validate ng-options="typeOfProperty for typeOfProperty in typeOfProperties track by typeOfProperty"></form>')($rootScope);

            $rootScope.$digest();

            expect($rootScope.form.custProperty.$valid).toBe(false);
        });

        it('is valid', function() {
            var element = $compile('<form name="form"><select name="custProperty" ng:model="customer.typeOfProperty" required select-validate ng-options="typeOfProperty for typeOfProperty in typeOfProperties track by typeOfProperty"></form>')($rootScope);

            $rootScope.form.custProperty.$setViewValue('Detached');
            $rootScope.$digest();

            expect($rootScope.form.custProperty.$valid).toBe(true);
        });

    });

    describe('emailCheck', function() {

        it('is not valid', function() {
            $rootScope.customer = { confirmEmail: null, email: null };

            var element = $compile('<form name="form"><input type="email" name="custConfirmEmail" ng:model="customer.confirmEmail" required placeholder="eg. john@sky.com" email-check="{{customer.email}}" server-error/></form>')($rootScope);

            $rootScope.form.custConfirmEmail.$setViewValue('acnalesso@');
            $rootScope.$digest();

            expect($rootScope.form.custConfirmEmail.$valid).toBe(false);
        });

        it('is valid', function() {

            var element = $compile('<form name="form"><input type="email" name="custEmail" ng:model="customer.email" required placeholder="eg. john@sky.com" /><input type="email" name="custConfirmEmail" ng:model="customer.confirmEmail" required placeholder="eg. john@sky.com" email-check="{{customer.email}}" /></form>')($rootScope);

            $rootScope.form.custEmail.$setViewValue('acnalesso@yahoo.co');
            $rootScope.form.custConfirmEmail.$setViewValue('acnalesso@yahoo.co');

            $rootScope.$digest();

            expect($rootScope.form.custEmail.$valid).toBe(true);
        });

    });

    describe('postcodeValidate', function() {
        it('is valid', function() {
            var element = $compile('<form name=form><input type="text" ng:model="postcode" name=postcode postcode-validate></form>')($rootScope);

            $rootScope.form.postcode.$setViewValue("TW9 9DE");
            expect($rootScope.form.postcode.$valid).toBe(true);

            $rootScope.form.postcode.$setViewValue("TW99DE");
            expect($rootScope.form.postcode.$valid).toBe(true);
        });

        it('is not valid', function() {
            var element = $compile('<form name=form><input type=text ng:model="postcode" name=postcode postcode-validate></form>')($rootScope);

            $rootScope.form.postcode.$setViewValue('INValid');
            expect($rootScope.form.postcode.$valid).toBe(false);

            $rootScope.form.postcode.$setViewValue('123')
            expect($rootScope.form.postcode.$valid).toBe(false);

            $rootScope.form.postcode.$setViewValue('&^$£./')
            expect($rootScope.form.postcode.$valid).toBe(false);
        });

    });

    describe('nameValidate', function() {
        it('is valid', function() {
            var element = $compile('<form name=form><input type="text" ng:model="name" name=name name-validate></form>')($rootScope);

            $rootScope.form.name.$setViewValue("António");
            expect($rootScope.form.name.$valid).toBe(true);

        });

        it('is not valid', function() {
            var element = $compile('<form name=form><input type="text" ng:model="name" name=name name-validate></form>')($rootScope);

            $rootScope.form.name.$setViewValue('123')
            expect($rootScope.form.name.$valid).toBe(false);

            $rootScope.form.name.$setViewValue('&^$£./')
            expect($rootScope.form.name.$valid).toBe(false);
        });

    });


    describe('houseValidate', function() {
        it('is valid', function() {
            var element = $compile('<form name=form><input type="text" ng:model="house" name=house house-validate></form>')($rootScope);

            $rootScope.form.house.$setViewValue("Antonio's house");
            expect($rootScope.form.house.$valid).toBe(true);

            $rootScope.form.house.$setViewValue("Ceol na bPáistí");
            expect($rootScope.form.house.$valid).toBe(true);

        });

    });

    describe('contactNumberValidate', function() {
        it('is valid', function() {
            var element = $compile('<form name=form><input type="text" ng:model="number" name=number contact-number-validate></form>')($rootScope);

            $rootScope.form.number.$setViewValue("1234567890");
            expect($rootScope.form.number.$valid).toBe(true);
        });

        it('is not valid', function() {
            var element = $compile('<form name=form><input type="text" ng:model="number" name=number contact-number-validate></form>')($rootScope);

            $rootScope.form.number.$setViewValue("123");
            expect($rootScope.form.number.$valid).toBe(false);

            $rootScope.form.number.$setViewValue("Hello");
            expect($rootScope.form.number.$valid).toBe(false);
        });

    });

});
