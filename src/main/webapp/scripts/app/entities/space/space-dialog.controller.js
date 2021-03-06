'use strict';

angular.module('coworkApp').controller('SpaceDialogController',
    ['$scope', '$stateParams', '$modalInstance', 'entity', 'Space', 'Service', 'User',
        function($scope, $stateParams, $modalInstance, entity, Space, Service, User) {

        $scope.space = entity;
        $scope.services = Service.query();
        $scope.users = User.query();
        $scope.load = function(id) {
            Space.get({id : id}, function(result) {
                $scope.space = result;
            });
        };

        var onSaveFinished = function (result) {
            $scope.$emit('coworkApp:spaceUpdate', result);
            $modalInstance.close(result);
        };

        $scope.save = function () {
            if ($scope.space.id != null) {
                Space.update($scope.space, onSaveFinished);
            } else {
                Space.save($scope.space, onSaveFinished);
            }
        };

        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
}]);
