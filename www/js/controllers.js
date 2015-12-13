angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats, $cordovaContacts) {
  $scope.getAllContacts = function() 
  {
    alert('getting' + JSON.stringify($cordovaContacts));
    $cordovaContacts.find({filter: ''}).then(function(allContacts) 
    {
      alert('allContacts ' + JSON.stringify(allContacts));
      $scope.chats = allContacts;
    }, function(error) {
      alert('e ' + error);
    });
  };
  
  $scope.$on('$ionicView.enter', function(e) {
    $scope.getAllContacts();
  });

  // $scope.chats = Chats.all();
  
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
