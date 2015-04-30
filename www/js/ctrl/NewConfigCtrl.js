angular.module('soga')
    .controller('NewConfigCtrl', function($scope, ConfigService) {

        $scope.config = {
            name: '',
            moisture: ''
        };

        $scope.incMoisture = function() {
            if($scope.moisture < 100) {
                $scope.moisture += 1;
            }
        };

        $scope.decMoisture = function() {
            if($scope.moisture > 0) {
                $scope.moisture -= 1;
            }
        };

        $scope.saveConfig = function() {
            //data[$scope.config.name] = $scope.config.moisture;
            console.info($scope.config);
            ConfigService.newConfig($scope.config);
        };
    });