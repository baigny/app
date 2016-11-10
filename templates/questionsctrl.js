angular.module('main').controller('questionsctrl', function ($http,$scope,$uibModal, $timeout,$stateParams) {


console.log($stateParams.id)

    $scope.q_list = function () {
        $timeout(function () {
 $http.get("http://poll.theguywithideas.com/api/surveys/"+$stateParams.id+"/questions/all")
            .success(function (res) {
                $scope.items=res.data;
                console.log(res.data);
            })
            .error(function (res) {
                



            });
               }, 400)
    }

    $scope.q_list();


  $scope.addoption = function(index){
      //  console.log(index)

        modal(index)

    }

    function modal (loc_obj) {
      
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'templates/addoption.html',
        controller: 'addoptionctrl',
        
        resolve: {
          items: function () {
            return loc_obj;
          }
        }
      });
console.log(loc_obj);
   modalInstance.result.then(function () {
            $scope.q_list();
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };



    $scope.editquestion = function(index){
      //  console.log(index)

        modalquest(index)

    }

    function modalquest (loc_obj) {
      
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'templates/editquestion.html',
        controller: 'editquestionctrl',
        
        resolve: {
          items: function () {
            return loc_obj;
          }
        }
      });
console.log(loc_obj);
   modalInstance.result.then(function () {
            $scope.q_list();
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

     $scope.deletebyid = function(index){
       console.log(index.questionId)
        $http.post("http://poll.theguywithideas.com/api/surveys/questions/"+index.questionId+"/delete")
            .success(function (res) {                
                console.log("Deleted");
                $scope.q_list();
            })
            .error(function (res) {
              console.log(res);
                



            });

        // modal(index)

    };


     $scope.addquestion = function(index){
       console.log(index)

        modaladdquest($stateParams.id)

    }

    function modaladdquest (loc_obj) {
      
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'templates/addquestion.html',
        controller: 'addquestionctrl',
        
        resolve: {
          items: function () {
            return loc_obj;
          }
        }
      });
console.log(loc_obj);
   modalInstance.result.then(function () {
            $scope.q_list();
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };


 
});
