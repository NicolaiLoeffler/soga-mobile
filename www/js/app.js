angular.module('soga', ['ionic', 'btford.socket-io', 'ngLodash'])

.config(function($urlRouterProvider, $stateProvider, $compileProvider) {
    $compileProvider.debugInfoEnabled(false);
    $urlRouterProvider.otherwise('login');

    $stateProvider
        .state('menu', {
          url : "/menu",
          abstract : true,
          templateUrl : "templates/Menu.html"
        })
        .state("login", {
          url : "/login",
          templateUrl : 'templates/Login.html'
        })
        .state('menu.garden', {
            url: '/garden',
            views: {
                'menuContent': {
                    templateUrl: 'templates/GardenOverview.html'
                }
            }
        })
        .state('menu.configs', {
            cache: false,
            url: '/configs',
            views: {
                'menuContent': {
                    templateUrl: 'templates/Configs.html'
                }
            }
        })
        .state('menu.newConfig', {
            url: '/configs/newConfig',
            views: {
                'menuContent': {
                    templateUrl: 'templates/NewConfig.html'
                }
            }
        })
        .state('menu.config', {
            url: '/configs/:name',
            views: {
                'menuContent': {
                    templateUrl: 'templates/Config.html'
                }
            }
        })
        .state('menu.chat', {
            url: '/chat',
            views: {
                'menuContent': {
                    templateUrl: 'templates/Chat.html'
                }
            }
        })
})

.factory('mySocket', function(socketFactory) {
    mySocket = socketFactory({
        ioSocket: io.connect('http://192.168.2.4:3000')
    });
    return mySocket;
})

.constant('baseUrl', 'http://192.168.2.4:3000')

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
