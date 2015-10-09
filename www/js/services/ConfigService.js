/**
 * Created by niloeffl on 21.04.15.
 */
angular.module('soga')
    .service('ConfigService', function($http) {
        return {
            getConfigs: function() {
                return $http.get('http://localhost:3000/configs');
            },
            getConfig: function(name) {
              return $http.get('http://localhost:3000/configs/'+name);
            },
            newConfig: function(data) {
                return $http.post('http://localhost:3000/newConfig', data);
            },
            deleteConfig: function(name) {
              console.info(name);
                return $http.delete('http://localhost:3000/configs/'+name);
            }
        };
    });
