var app = angular.module("RouterApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/form", {
      templateUrl: "templates/form.html",
    })
    .when("/", {
      templateUrl: "templates/address_book.html"
    })
    .otherwise("/");
});

app.controller("FormCtrl", function($scope, PhoneBookService) {
  $scope.newEntry = "";
  $scope.addEntry = function(entry) {
    PhoneBookService.addEntry(entry);
    console.log(PhoneBookService.entries);
    $scope.newEntry = "";
  };
});

app.controller("AddressBookCtrl", function($scope, PhoneBookService) {
  $scope.entries = PhoneBookService.entries;
  console.log("a", $scope.entries);
});

app.factory("PhoneBookService", function() {
  var phoneBookService = {};

  phoneBookService.entries = [];
  phoneBookService.addEntry = function(entry) {
    phoneBookService.entries.push(entry);
  };

  return phoneBookService;
});