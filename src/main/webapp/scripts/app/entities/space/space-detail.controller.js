'use strict';

angular.module('coworkApp')
    .controller('SpaceDetailController', function ($scope, $rootScope, $stateParams, entity, Space, Service, User) {
        $scope.space = entity;
        $scope.load = function (id) {
            Space.get({id: id}, function(result) {
                $scope.space = result;
            });
        };
        $rootScope.$on('coworkApp:spaceUpdate', function(event, result) {
            $scope.space = result;
        });
    });
