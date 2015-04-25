/**
 * Created by niloeffl on 21.04.15.
 */
angular.module('soga')
    .service('ConfigService', function($http) {
        return {
            getPlants: function() {
                return $http.get('http://localhost:3000/configs');
            }
        };
    });