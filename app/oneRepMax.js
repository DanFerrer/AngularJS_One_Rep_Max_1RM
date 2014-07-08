/**
 * Created by Dan on 6/29/2014.
 */

(function() {

    'use strict';

    var oneRepMax = angular.module('oneRepMax', []).value('appSettings', {
        MINWEIGHT: 1,
        MINREPS: 1,
        MAXREPS: 10
    });

    var max_controller = function($scope, appSettings) {
        $scope.inputs = {
            weightLifted: ' ',
            repsDone: ' ',
            maxWeight: ' ',
            percentages: []
        };
        $scope.appSettings = appSettings;

    //Deep copy of model
    var originalData = angular.copy($scope.inputs);

    $scope.calculateMax = function(weight, reps) {
        if(reps > appSettings.MAXREPS || reps < appSettings.MINREPS) {
            alert('Please enter a number of reps between 1 - 10 ');
            return false
        }
        else if (weight < appSettings.MINWEIGHT ) {
            alert('Please enter a weight greater than 0');
            return false
        }
        else {
            $scope.inputs.maxWeight = Math.round(weight / (1.0278 - 0.0278 * reps));
        }

        $scope.inputs.percentages = [
            {name: '50%', weight: Math.round($scope.inputs.maxWeight * 0.50)},
            {name: '55%', weight: Math.round($scope.inputs.maxWeight * 0.55)},
            {name: '60%', weight: Math.round($scope.inputs.maxWeight * 0.60)},
            {name: '65%', weight: Math.round($scope.inputs.maxWeight * 0.65)},
            {name: '70%', weight: Math.round($scope.inputs.maxWeight * 0.70)},
            {name: '75%', weight: Math.round($scope.inputs.maxWeight * 0.75)},
            {name: '80%', weight: Math.round($scope.inputs.maxWeight * 0.80)},
            {name: '85%', weight: Math.round($scope.inputs.maxWeight * 0.85)},
            {name: '90%', weight: Math.round($scope.inputs.maxWeight * 0.90)},
            {name: '95%', weight: Math.round($scope.inputs.maxWeight * 0.95)}
        ]
    };

    $scope.resetInputs = function() {
        angular.copy(originalData, $scope.inputs);
    }

    };

    //inject $scope service into controller
    max_controller.$inject = ['$scope', 'appSettings'];

    oneRepMax.controller('max_controller', max_controller);

})();