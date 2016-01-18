var app = angular.module('weekendApp', []);

app.controller('mainController', ['$scope', 'GitHubService', function($scope, GitHubService){
    $scope.controllerData = GitHubService.returnedData;
    GitHubService.makeCall();
}]);

app.factory('GitHubService', ['$http', function($http){

    var returnedData = {};          // Establishes an empty object called returnedData

    var makeCall = function(){
        $http.jsonp('https://api.github.com/users/jeremycloutier/events?callback=JSON_CALLBACK').then(function(response){
            console.log(response);
            returnedData.content = response.data.data;      // Creating response based off of the Data object
        });
    };

    return {                        // These returns make the data accessible to the controller
        makeCall: makeCall,
        returnedData: returnedData
    }
}]);