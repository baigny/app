angular.module('main').controller('mainController', function ($scope, $state, $http,$uibModal, $timeout) {

 
  $scope.q_list = function () {
        $timeout(function () {
 $http.get("http://poll.theguywithideas.com/api/surveys")
            .success(function (res) {
                $scope.items=res.data;
                console.log(res.data);
            })
            .error(function (res) {     
            });
               }, 400)
    }

    $scope.q_list();

            $scope.refreshPage=function (){
    window.location.reload();
}
        
   $scope.getId = function(index){
       // console.log(index)

        modal(index)

    }

    function modal (loc_obj) {
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'templates/editmodal.html',
        controller: 'editmodalctrl',
        
        resolve: {
          items: function () {
            return loc_obj;
          }
        }
      });
        modalInstance.result.then(function () {
            $scope.q_list();
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });

    };
    $scope.deletebyid = function(index){
       console.log(index.surveyId)
        $http.post("http://poll.theguywithideas.com/api/surveys/"+index.surveyId+"/delete")
            .success(function (res) {                
                console.log("Deleted");
            })
            .error(function (res) {
              console.log(res);
                



            });

        // modal(index)

    }
     $scope.questions = function(_obj){
        //  modalques(index)
        console.log("Clicked", _obj);
        //  $state.go('quest')
    }

    function modalques (loc_obj) {
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'templates/questions.html',
        controller: 'questionsctrl',
        
        resolve: {
          items: function () {
            return loc_obj;
          }
        }
      });
        modalInstance.result.then(function () {
            $scope.q_list();
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });

    };

    

});
