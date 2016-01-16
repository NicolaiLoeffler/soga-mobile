/**
 * Created by niloeffl on 17.04.15.
 */

angular.module('soga')
    .controller('ChatCtrl', function($scope) {

        $scope.user = 'Nico';
        $scope.message = {
            user: $scope.user,
            content: ''
        };

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

        $scope.sendMessage = function() {
            console.log('sending message' + $scope.message.content);
            $scope.messages.push($scope.message);
        };

    });
