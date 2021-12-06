var app = angular.module("mainApp", []);
app.controller("MainController", function ($scope) {
    $scope.message = "hell";
    $scope.sampleObj = {
        sampleVar: String
    };
    $scope.sampleObj.sampleVar = "this";
});
