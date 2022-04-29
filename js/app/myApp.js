const app = angular.module("my_app", [])

function myFunct($rootScope, $scope, $http) {
    $scope.products = [];

    const url = "https://626b4fe26a86cd64adba3a41.mockapi.io/products";

    // $http.get(url).
    //     then(function (response) {
    //         $scope.products = response.data;
    //     })

            $http.get('../db/products.js').
        then(function (response) {
            $scope.products = response.data;
        })

    $scope.onsubmitForm = function(event){
        event.prevenDefault();
        $http.post(url,$scope.insert).
            then(function(response){
                Swal.fire({
                    icon: 'success',
                    title: 'Thêm thành công!',
                });
            })
    }


    $scope.begin = 0;
    $scope.pageCount = Math.ceil($scope.products.length / 8);

    $scope.first = function () {
        $scope.begin = 0;
    }

    $scope.prev = function () {
        if ($scope.begin > 0) {
            $scope.begin -= 8;
        }
    }

    $scope.next = function () {
        if ($scope.begin > ($scope.pageCount - 1) * 8) {
            $scope.begin += 8;
        }
    }

    $scope.last = function () {
        $scope.begin = ($scope.pageCount - 1) * 8;
    }


    $scope.xemchitet = function(){
        Swal.fire({
            icon: 'success',
            title: 'Có Gì Đâu Mà Xem!',
        });
    }

}

// function myFunct($scope, $http) {
//     $scope.products = [];

//     $http.get('../js/products.js').
//         then(function (response) {
//             $scope.products = response.data;
//         })

// }

app.controller("my_controller", myFunct);