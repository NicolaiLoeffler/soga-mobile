angular.module('soga')
    .controller('NewConfigCtrl', function($scope, $ionicPopup, $state, ConfigService) {

        $scope.config = {
            name: '',
            moisture: 0
        };

        $scope.incMoisture = function() {
            if ($scope.config.moisture != 100) {
                $scope.config.moisture = +$scope.config.moisture + 1;
            }
        };

        $scope.decMoisture = function() {
            if ($scope.config.moisture != 0) {
                $scope.config.moisture = +$scope.config.moisture - 1;
            }
        };

        $scope.saveConfig = function() {
            ConfigService.newConfig($scope.config)
                .success(function(resp) {
                    console.log('success');
                    var alertPopup = $ionicPopup.alert({
                        title: 'Configuration creation',
                        template: 'Confiuration was successfully created'
                    });
                    alertPopup.then(function(res) {
                        $state.go('menu.configs');
                    });
                });
        };
    });
