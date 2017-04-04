angular.module("myApp", []).controller("myCtrl", function ($scope) {
    $scope.items=[];

    $scope.calculateTotal = function(){
        $scope.items.push($scope.amount);
        $scope.subtotal = 0;
        for(var n = 0; n < $scope.items.length; n++){
            $scope.subtotal += Number($scope.items[n]);
        }
        $scope.amount="";
        if($scope.province == "ON"){
            $scope.hst = 0.13 * $scope.subtotal;
        }else if($scope.province == "AB"){
            $scope.hst = 0.05 * $scope.subtotal;
        }
        else if($scope.province == "BC"){
             $scope.hst = 0.12 * $scope.subtotal;
        }
         else if($scope.province == "NS"){
             $scope.hst = 0.15 * $scope.subtotal;
        }
        else if($scope.province == "QC"){
             $scope.hst = 0.149 * $scope.subtotal;
        }
        else if($scope.province == "PEI"){
             $scope.hst = 0.15 * $scope.subtotal;
        }
        else if($scope.province == "NB"){
             $scope.hst = 0.15 * $scope.subtotal;
        }
        else if($scope.province == "Yuk"){
             $scope.hst = 0.15 * $scope.subtotal;
        }
        $scope.total = $scope.hst + $scope.subtotal
    }
});
