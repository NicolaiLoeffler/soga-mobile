angular.module('soga')
    .controller('NewConfigCtrl', function($scope, ConfigService) {

        $scope.config = {
            name: '',
            moisture: 0
        };

        $scope.incMoisture = function() {
            if($scope.config.moisture != 100) {
                $scope.config.moisture = +$scope.config.moisture + 1;
            }
        };

        $scope.decMoisture = function() {
            if($scope.config.moisture != 0) {
                $scope.config.moisture = +$scope.config.moisture - 1;
            }
        };

        $scope.saveConfig = function() {
            //data[$scope.config.name] = $scope.config.moisture;
            console.info($scope.config);
            ConfigService.newConfig($scope.config);
        };
    });