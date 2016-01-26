angular.module('soga')
    .controller('LoginCtrl', function($scope, $rootScope, $state, $ionicPopup) {

        $scope.login = function(username) {
            if(username === '' || username == undefined) {
              var alertPopup = $ionicPopup.alert({
                  title: 'Username missing',
                  template: 'Please enter a username!'
              });
              return;
            }
            $rootScope.username = username;
            $state.go('menu.garden');
        };

    });
