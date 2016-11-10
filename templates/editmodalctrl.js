angular.module('main').controller('editmodalctrl', function ($http,$scope, $uibModalInstance, items) {

  $scope.items = items;
  console.log($scope.items);





//console.log(data)


  $scope.ok = function () {
      // var code = $scope.items.code
      console.log($scope.items.surveyTitle)
      console.log($scope.items.surveySubtitle)
      console.log($scope.items.instructions);
      console.log($scope.items.surveyId);
       $http.put("http://poll.theguywithideas.com/api/surveys/"+$scope.items.surveyId+"/edit", {
"instructions": $scope.items.instructions,
"surveySubtitle": $scope.items.surveySubtitle,
"surveyTitle": $scope.items.surveyTitle
})
            .success(function (res) {
                
                console.log("Updated");
                

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
