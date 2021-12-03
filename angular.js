var app = angular.module("mainApp", []);
var MainController = /** @class */ (function () {
    function MainController($scope) {
        $scope.message = "hello world";
    }
    MainController.$inject = ["$scope"];
    return MainController;
}());
app.controller("MainController", MainController);
