/**
 * Created by niloeffl on 17.04.15.
 */

angular.module('soga')
    .controller('GardenOverviewCtrl', function ($scope, GardenService) {
        $scope.plants;

        GardenService.getGarden()
            .then(function (resp) {
                $scope.plants = resp.data;
            });
    });