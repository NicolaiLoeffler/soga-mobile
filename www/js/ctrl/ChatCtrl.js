/**
 * Created by niloeffl on 17.04.15.
 */

angular.module('soga')
    .controller('ChatCtrl', function($scope, lodash, mySocket, $rootScope, $ionicScrollDelegate, $http, baseUrl) {

        $scope.messages = [];

        $scope.message = {
            user: $rootScope.username,
            content: ''
        };

        $http.get(baseUrl + '/messages')
            .then(function(response) {
                console.log(response.data);
                $scope.messages = response.data;
            });

        mySocket.on('chat:message', function(message) {
            if(message.user === $scope.user) return;
            $scope.messages.push(message);
            $ionicScrollDelegate.scrollBottom(true);
        });

        $scope.sendMessage = function() {
            if($scope.message.content === '') return;
            $scope.message.user = $rootScope.username;
            var messageClone = lodash.cloneDeep($scope.message);
            $scope.message.content = '';
            $scope.messages.push(messageClone);
            mySocket.emit('chat:newMessage', messageClone);
            $ionicScrollDelegate.scrollBottom(true);
        };
    });
