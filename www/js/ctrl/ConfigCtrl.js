/**
 * Created by niloeffl on 17.04.15.
 */

angular.module('soga')
    .controller('ConfigCtrl', function($scope, $ionicPopup, $stateParams, ConfigService) {

        $scope.config;

        ConfigService.getConfig($stateParams.name)
            .error(function(resp) {
                console.info('Failed getting config (' + name + ')');
            })
            .then(function(resp) {
                $scope.config = resp.data;
            });

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
            ConfigService.saveConfig($scope.config);
        };
    });
