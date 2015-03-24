module.exports = function(config) {
    config.set({
        basePath: '../',

        frameworks: ['jasmine'],

        files: [
            './bower_components/angular/angular.js',
            './bower_components/angular-mocks/angular-mocks.js',
            'dist/prereg-client-validation.js',
            'test/unit/*.js'
        ],

        exclude: [],

        reporters: ['dots'],

        port: 3000,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: true,

        browsers: ['Chrome', 'Firefox', 'PhantomJS'],

        singleRun: false
    });
};