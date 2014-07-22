/**
 * Created by Daniel on 7/11/2014.
 */


var MaxController = function($scope, MaxModel, MaxService, validation) {

    $scope.max = {
        weightLifted: MaxModel.weight,
        repsDone: MaxModel.reps,
        percentages: MaxModel.percentages,
        maxWeight: MaxModel.maxWeight,
        originalData: MaxModel.originalData
    };

    $scope.max.calculateMax = function() {
        if(this.repsDone > validation.MAX_REPS || this.repsDone < validation.MIN_REPS) {
            alert('Please enter a number of reps between 1 - 10');
            return false;
        } else if (this.weightLifted < validation.MIN_WEIGHT) {
            alert('Please enter a weight greater than 0');
            return false
        } else {
            this.maxWeight = MaxService.calculate(this.weightLifted, this.repsDone);
            this.percentages = [
                {name: '50%', weight: Math.round($scope.max.maxWeight * 0.50)},
                {name: '55%', weight: Math.round($scope.max.maxWeight * 0.55)},
                {name: '60%', weight: Math.round($scope.max.maxWeight * 0.60)},
                {name: '65%', weight: Math.round($scope.max.maxWeight * 0.65)},
                {name: '70%', weight: Math.round($scope.max.maxWeight * 0.70)},
                {name: '75%', weight: Math.round($scope.max.maxWeight * 0.75)},
                {name: '80%', weight: Math.round($scope.max.maxWeight * 0.80)},
                {name: '85%', weight: Math.round($scope.max.maxWeight * 0.85)},
                {name: '90%', weight: Math.round($scope.max.maxWeight * 0.90)},
                {name: '95%', weight: Math.round($scope.max.maxWeight * 0.95)}
            ]
        }
    };

//    $scope.max.resetMax = function() {
//        MaxService.reset($scope.originalData, $scope.max);
//    }
};

//inject $scope service and factory into controller
MaxController.$inject = ['$scope' , 'MaxModel', 'MaxService', 'validation'];

oneRepMax.controller('MaxController', MaxController);