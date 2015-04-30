/**
 * Created by niloeffl on 21.04.15.
 */
angular.module('soga')
    .service('ConfigService', function($http) {
        return {
            getConfigs: function() {
                return $http.get('http://localhost:3000/configs');
            },
            newConfig: function(data) {
                return $http.post('http://localhost:3000/newConfig', data);
            }
        };
    });