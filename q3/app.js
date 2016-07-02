var module = angular.module('app', []);
		module.service('app', function () {
			
				var employee_id = 1;
				var contacts = [{}]; //array to store employee details
				contacts.set = function (contact) 
				 {                                               //save method create a new contact if not already exists else update the existing object
					if (contact.id == null) {
						contact.id = employee_id++;
						contacts.push(contact);
			            } 
				  }
				contacts.get = function (id) {            // To fetch data from array
					for (i in contacts) {
						if (contacts[i].id == id) {
							return contacts[i];
						}
					}
				}
				contacts.list = function () {
					return contacts;
				}
				return contacts;
			});
		module.controller('empcont', function ($scope, app) {
			$scope.contacts = app.list();
			$scope.store = function () {
				app.set($scope.newcontact);
				$scope.newcontact = {};
			}
		})