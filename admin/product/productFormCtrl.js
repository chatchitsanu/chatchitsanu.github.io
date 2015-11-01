dashboardApp.controller('productFormCtrl', function($scope, productModel,productServ) {
    $scope.product = productModel;
    $scope.save = function() {
        console.log($scope.product);
    };
})