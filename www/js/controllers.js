angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Contacts) {
  
  $scope.contacts = Contacts;
  
  $scope.pickContact = function () {
    $cordovaContacts.pickContact().then(function(contactPicked) {
       if(contactPicked){
        $scope.contacts.$add(contactPicked);  
       }
    });
  };
  
})

.controller('ChatsCtrl', function($scope, Chats, $cordovaContacts) {
  
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
