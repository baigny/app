angular.module('main').controller('newsurveyCtrl', function ($scope, $http, $timeout) {

 $scope.abc = "newsurveyCtrl"
  $scope.newpoll = function () {
     $http.post("http://poll.theguywithideas.com/api/surveys/create", {
"instructions": $scope.surinstructions,
"surveySubtitle": $scope.surname,
"surveyTitle": $scope.surtitle
})
            .success(function (res) {
                
                console.log("posted");
                

            })
            .error(function (res) {
                



            });


    };

});
