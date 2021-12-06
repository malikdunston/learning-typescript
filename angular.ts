declare var angular: any;

let app = angular.module("mainApp", [
]);

app.controller("MainController", ($scope: any) => {
	$scope.message = "hell";
	$scope.sampleObj = {
		sampleVar: String
	}
	$scope.sampleObj.sampleVar = "this";
});