/**
 * Created by niloeffl on 17.04.15.
 */

angular.module('soga')
    .controller('GardenOverviewCtrl', function($scope, $rootScope, GardenService, ConfigService, mySocket) {
        $scope.devices;
        $scope.configs;
        $scope.sel;

        $scope.getAllConfigs = function() {
          ConfigService.getConfigs()
              .then(function(resp) {
                  $scope.configs = resp.data;
              });
        };
        
        $scope.getAllConfigs();

        mySocket.on('backend:waterlevel', function(data) {
            $scope.devices[0].waterlevel = data.value;
            $scope.$apply();
        });

        mySocket.on('backend:moisture', function(data) {
            $scope.devices[0].moisture = data.value;
            $scope.$apply();
        });

        GardenService.getDevices()
            .then(function(resp) {
                $scope.devices = resp.data
                $scope.devices[0].moisture = 30;
            });

        $scope.assignConfig = function(device) {
            console.info(device);
            GardenService.assignConfig(device);
        };

        $scope.getStyle = function() {
            var transform = ($scope.isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';
            return {
                'top': $scope.isSemi ? 'auto' : '50%',
                'bottom': $scope.isSemi ? '5%' : 'auto',
                'left': '50%',
                'transform': transform,
                '-moz-transform': transform,
                '-webkit-transform': transform,
                'font-size': $scope.radius / 3.5 + 'px'
            };
        };


        $rootScope.$on('$stateChangeStart',
            function(event, toState, toParams, fromState, fromParams) {
                if(toState.url == '/garden') {
                    $scope.getAllConfigs();
                }
            });
});
