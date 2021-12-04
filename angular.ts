declare var angular: any;

let app = angular.module("mainApp", [
]);

app.controller("MainController", ($scope: any) => {
	$scope.message = "hello";
});