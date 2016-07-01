var module= angular.module("myapp", []);
		module.controller("myctrl", function($scope){
			$scope.name="Prabhjot";
			$scope.designation="SDE";
			$scope.fun= function print()
			{
				alert("Pop up");
				
			}

		});
		module.directive("ngOut",function(){
			return{
				template: '<div  class="name-body"> <p>output with restrict type A is: </p> {{name}} <button ng-click="fun()"> Click here</button></div>',
				restrict: 'A',
				
			}
		});
			module.directive("ngOut1", function(){
				return{
					template: '<div  class="desig-body">  <p>output with restrict type E is: </p> {{designation}} <button ng-click="fun()"> Click here</button></div>',
					restrict: 'E',
					
				}
			});
				module.directive("ngOut2", function(){
				return{
					template: '<div  class="panel-body"> {{name}}<button ng-click="fun()"> Click here</button> </div>',
					restrict: 'M',
					
				}

			
		});
	angular.module('directivesModule').directive('myIsolatedScopeWithName', function () {
    return {
        scope: {
            name: '@'
        },
        template: 'Name: {{ name }}'
    };
});
