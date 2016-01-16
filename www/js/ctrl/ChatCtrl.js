/**
 * Created by niloeffl on 17.04.15.
 */

angular.module('soga')
    .controller('ChatCtrl', function($scope) {

        $scope.user = 'Nico';

        $scope.messages = [
            {
              content: 'Hallo',
              user: 'Nico'
            },
            {
              content: 'Test',
              user: 'System'
            },
            {
              content: 'jooooooooooooooo',
              user: 'dummy'
            }
        ];

    });
