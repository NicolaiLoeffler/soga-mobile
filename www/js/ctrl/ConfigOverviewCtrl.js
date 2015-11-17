/**
 * Created by niloeffl on 17.04.15.
 */

angular.module('soga')
  .controller('ConfigOverviewCtrl', function($scope, $ionicPopup, ConfigService) {
    $scope.configs;
    $scope.query;

    ConfigService.getConfigs()
      .error(function(resp) {
        alert("getConfigsFailed");
      })
      .then(function(resp) {
        $scope.configs = resp.data;
        console.info(resp.data);
      });

    // A confirm dialog
    $scope.deleteConfig = function(name) {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Confirmation',
        template: 'Are you sure you want to delete this configuration?'
      });
      confirmPopup.then(function(res) {
        if (res) {
          ConfigService.deleteConfig(name);
        }
      });
    };
  });
