angular.module('soga')
    .controller('NewConfigCtrl', function($scope, ConfigService) {

        $scope.moisture = 50;

        $scope.incMoisture = function() {
            if($scope.moisture < 100) {
                $scope.moisture += 1;
            }
        }

        $scope.decMoisture = function () {
            if($scope.moisture > 0) {
                $scope.moisture -= 1;
            }
        }
    });