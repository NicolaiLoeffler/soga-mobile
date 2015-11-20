angular.module('soga', ['ionic'])

.config(function($urlRouterProvider, $stateProvider, $compileProvider) {
    $compileProvider.debugInfoEnabled(false);
    $urlRouterProvider.otherwise('/garden');
    $stateProvider
        .state('garden', {
            url: '/garden',
            views: {
                'menuContent': {
                    templateUrl: 'templates/GardenOverview.html'
                }
            }
        })
        .state('configs', {
            cache: false,
            url: '/configs',
            views: {
                'menuContent': {
                    templateUrl: 'templates/Configs.html'
                }
            }
        })
        .state('newConfig', {
            url: '/configs/newConfig',
            views: {
                'menuContent': {
                    templateUrl: 'templates/NewConfig.html'
                }
            }
        })
        .state('config', {
            url: '/configs/:name',
            views: {
                'menuContent': {
                    templateUrl: 'templates/Config.html'
                }
            }
        })
})


.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});
