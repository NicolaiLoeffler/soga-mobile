angular.module('soga')
    .controller('LoginCtrl', function($scope, $rootScope, $state) {

        $scope.login = function(username) {
            $rootScope.username = username;
            $state.go('menu.chat');
        };
        
    });
