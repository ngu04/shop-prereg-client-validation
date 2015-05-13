You can this git as bower dependency in your project

## Install
bower install https://github.com/bskyb-commerce/shop-prereg-client-validation


## Include as dependency in project and then bower install

you can add following in dependencies of bower.json of your project

"prereg-client-validation": "git@github.com:bskyb-commerce/shop-prereg-client-validation.git",



## How to use it

You need to include 'preregCommonDirectives' as one of Angular Modules

Then you can just add directives in your input field of html page or template

for example : 'postcode-validate' can be used as following

<input type="text" id="postcode" name="custPostcode" ng:model="customer.postcode"  postcode-validate>

Above example is used in Thunder website project . You will find few more examples in PreReg Thunder and Ethan projects



## Where to find directives

You can use all available directives in 'prereg-client-validation.js'