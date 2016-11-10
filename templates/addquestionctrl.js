angular.module('main').controller('addquestionctrl', function ($http,$scope, $uibModalInstance, items) {


  $scope.items = items;
  console.log($scope.items);




//console.log(data)


  $scope.ok = function () {
      // var code = $scope.items.code
      // console.log($scope.items.questionId)
      
       $http.post("http://poll.theguywithideas.com/api/surveys/"+$scope.items+"/question/create", {
"questionText": $scope.questionText
})
            .success(function (res) {
                
                console.log("Added");
                

            })
            .error(function (res) {
              console.log(res);
                



            });
      // console.log($scope.items)
      // console.log(level)
      // updateField(level,code,$scope.items);

    $uibModalInstance.close($scope.item);
  };

 

  $scope.cancel = function () {

    $uibModalInstance.dismiss('cancel');
  };
});
