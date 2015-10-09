angular.module('soga')
.controller('NewConfigCtrl', function($scope, $ionicPopup, ConfigService) {

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
    ConfigService.newConfig($scope.config)
    .error(function(resp) {

    })
    .then(function(resp) {
      $scope.showAlert = function() {
        var alertPopup = $ionicPopup.alert({
          title: 'Configuration creation',
          template: 'Confiuration was successfully created'
        });
        alertPopup.then(function(res) {
          console.log('Thank you for not eating my delicious ice cream cone');
        });
      };
    });
  };
};
});
