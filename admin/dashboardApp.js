var dashboardApp = angular.module('dashboardApp', ['ngRoute', 'ngMaterial']);
dashboardApp.config(function($routeProvider) {
    $routeProvider.when('/productList', {
        templateUrl: 'product/productList.html',
        controller: 'productListCtrl'
    }).when('/productForm', {
        templateUrl: 'product/productForm.html',
        controller: 'productFormCtrl'
    })
})