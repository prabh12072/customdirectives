var module= angular.module("myapp", []);
		module.controller("myctrl", function($scope){
			$scope.name="Prabhjot";
			$scope.designation="SDE";

		});
		module.directive("ngOut",function(){
			return{
				template: '<div  class="name-body"> <p>output with restrict type A is: </p> {{name}} </div>',
				restrict: 'A',
				
			}
		});
			module.directive("ngOut1", function(){
				return{
					template: '<div  class="desig-body">  <p>output with restrict type E is: </p> {{designation}} </div>',
					restrict: 'E',
					
				}
			});
				module.directive("ngOut2", function(){
				return{
					template: '<div  class="panel-body"> {{name}} </div>',
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