/**
 * Created by niloeffl on 17.04.15.
 */

angular.module('soga')
    .controller('ConfigOverviewCtrl', function($scope, ConfigService) {
        $scope.configs;

        ConfigService.getPlants()
            .error(function(resp) {
                alert("getConfigsFailed");
            })
            .then(function(resp) {
                $scope.configs = resp.data;
            });

        $scope.deleteConfig = function() {
            console.info("joasd");
        };


    });