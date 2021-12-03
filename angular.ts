let app = angular.module("mainApp", []);

class MainController{

	public static $inject = ["$scope"]

	constructor($scope: any){
		$scope.message = "hello world";
	}
}

app.controller("MainController", MainController);