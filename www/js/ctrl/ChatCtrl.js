/**
 * Created by niloeffl on 17.04.15.
 */

angular.module('soga')
    .controller('ChatCtrl', function($scope, lodash, mySocket, $rootScope) {

        $scope.user = $rootScope.username;
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

        mySocket.on('chat:message', function(message) {
            if(message.user === $scope.user) return;
            $scope.messages.push(message);
        });

        $scope.sendMessage = function() {
            console.log($rootScope.username);
            if($scope.message.content === '') return;
            console.log('sending message ' + $scope.message.content);
            var messageClone = lodash.cloneDeep($scope.message);
            $scope.message.content = '';
            $scope.messages.push(messageClone);
            mySocket.emit('chat:newMessage', messageClone);
        };
    });
