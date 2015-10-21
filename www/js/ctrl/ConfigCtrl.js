/**
 * Created by niloeffl on 17.04.15.
 */

angular.module('soga')
    .controller('ConfigCtrl', function($scope, $ionicPopup, $stateParams, ConfigService) {

        $scope.config;

        ConfigService.getConfig($stateParams.name)
            .error(function(resp) {
                console.info('Failed getting config ('+name+')');
            })
            .then(function(resp) {
                $scope.config = resp.data;
                console.info(resp.data);
            });

        // A confirm dialog
        $scope.deleteConfig = function(name) {
            var confirmPopup = $ionicPopup.confirm({
                title: 'Confirmation',
                template: 'Are you sure you want to delete this configuration?'
            });
            confirmPopup.then(function(res) {
                if(res) {
                    ConfigService.deleteConfig(name);
                }
            });
        };

        $scope.saveConfig = function() {
            console.info($scope.config);
            ConfigService.saveConfig($scope.config);
        };
});
