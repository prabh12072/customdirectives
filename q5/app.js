var app = angular.module('mainApp', []);
 
    app.controller("MainCtrl", function($scope){
        $scope.ctrlRole = "Development"
    });
 
    app.directive("myEmployee", function() {
 
        return {
            scope:
            {
                role:"="
            },
            template: 'From Directive : <input type="text" ng-model="role">'
        };
    });



    