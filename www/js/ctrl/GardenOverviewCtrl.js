/**
 * Created by niloeffl on 17.04.15.
 */

angular.module('soga')
    .controller('GardenOverviewCtrl', function($scope, GardenService, ConfigService) {
        $scope.devices;
        $scope.configs;
        $scope.sel;

        GardenService.getDevices()
            .then(function(resp) {
                $scope.devices = resp.data;
            });

        ConfigService.getConfigs()
            .then(function(resp) {
                $scope.configs = resp.data;
            });

        $scope.assignConfig = function(device) {
            console.info(device);
            GardenService.assignConfig(device);
        }
    });
