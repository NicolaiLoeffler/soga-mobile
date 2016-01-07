/**
 * Created by niloeffl on 17.04.15.
 */

angular.module('soga')
    .controller('GardenOverviewCtrl', function($scope, GardenService, ConfigService, mySocket) {
        $scope.devices;
        $scope.configs;
        $scope.sel;

        $scope.waterheight = "";

        mySocket.on('device:waterlevel', function(data) {
          console.info(data.waterlevel);
          $scope.devices.waterlevel = data.waterlevel;
          $scope.waterheight = data.waterlevel+"%";
          $scope.$apply();
        });

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
