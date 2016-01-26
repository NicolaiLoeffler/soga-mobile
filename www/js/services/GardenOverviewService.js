/**
 * Created by niloeffl on 21.04.15.
 */
angular.module('soga')
    .service('GardenService', function($http, baseUrl) {
        return {
            getDevices: function() {
                return $http.get(baseUrl + '/devices');
            },
            assignConfig: function(device) {
                return $http.post(baseUrl + '/devices', device);
            },
            getWaterLevels: function() {
                return $http.get(baseUrl + '/waterlevels');
            }
        };
    });
