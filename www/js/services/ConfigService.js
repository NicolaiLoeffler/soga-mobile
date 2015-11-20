/**
 * Created by niloeffl on 21.04.15.
 */
angular.module('soga')
    .service('ConfigService', function($http, baseUrl) {
        return {
            getConfigs: function() {
                return $http.get(baseUrl + '/configs');
            },
            getConfig: function(name) {
                return $http.get(baseUrl + '/configs/' + name);
            },
            newConfig: function(data) {
                return $http.post(baseUrl + '/newConfig', data);
            },
            deleteConfig: function(name) {
                return $http.delete(baseUrl + '/configs/' + name);
            },
            saveConfig: function(data) {
                return $http.put(baseUrl + '/configs', data);
            }
        };
    });
