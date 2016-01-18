/**
 * Created by niloeffl on 17.04.15.
 */

angular.module('soga')
    .controller('ChatCtrl', function($scope, lodash, mySocket, $rootScope) {

        $scope.message = {
            user: $rootScope.username,
            content: ''
        };

        mySocket.on('chat:message', function(message) {
            if(message.user === $scope.user) return;
            $scope.messages.push(message);
        });

        $scope.sendMessage = function() {
            if($scope.message.content === '') return;
            $scope.message.user = $rootScope.username;
            var messageClone = lodash.cloneDeep($scope.message);
            $scope.message.content = '';
            $scope.messages.push(messageClone);
            mySocket.emit('chat:newMessage', messageClone);
        };
    });
