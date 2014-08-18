/**
 * Created by Daniel on 7/11/2014.
 */


var MaxController = function(MaxModel, MaxService) {

    var _this = this;

    _this.weightLifted = MaxModel.weight;
    _this.repsDone = MaxModel.reps;
    _this.percentages = MaxModel.percentages;
    _this.maxWeight = MaxModel.maxWeight;

    MaxController.prototype.calculate1RM = function()  {
        _this.maxWeight = MaxService.calculateMax(_this.weightLifted, _this.repsDone);
        _this.percentages = MaxService.calculatePercentages(_this.maxWeight);
    };

};

MaxController.$inject = ['MaxModel', 'MaxService'];

angular.module('oneRepMax').controller('MaxController', MaxController);