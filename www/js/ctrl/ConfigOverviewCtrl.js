/**
 * Created by niloeffl on 17.04.15.
 */

angular.module('soga')
    .controller('ConfigOverviewCtrl', function($scope, $ionicPopup, $state, ConfigService) {
        $scope.configs;
        $scope.query;

        ConfigService.getConfigs()
            .error(function(resp) {
                alert("getConfigsFailed");
            })
            .then(function(resp) {
                $scope.configs = resp.data;
            });

        // A confirm dialog
        $scope.deleteConfig = function(name) {
            var confirmPopup = $ionicPopup.confirm({
                title: 'Confirmation',
                template: 'Are you sure you want to delete this configuration?'
            });
            confirmPopup.then(function(res) {
                if (res) {
                    ConfigService.deleteConfig(name)
                        .success(function() {
                            $scope.configs.splice($scope.configs.indexOf(name), 1);
                            $state.go("menu.configs");
                        })
                        .error(function(error) {
                            console.error(error);
                        });
                }
            });
        };
    });
