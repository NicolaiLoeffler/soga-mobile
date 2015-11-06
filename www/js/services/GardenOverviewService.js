/**
 * Created by niloeffl on 21.04.15.
 */
angular.module('soga')
    .service('GardenService', function($http) {
        return {
            getDevices: function() {
                return $http.get('http://localhost:3000/devices');
            },
            assignConfig: function(device) {
              return $http.post('http://localhost:3000/devices', device);
            }
        };
    });
