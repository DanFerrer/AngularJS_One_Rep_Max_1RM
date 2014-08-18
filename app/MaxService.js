/**
 * Created by Daniel on 7/12/2014.
 */

var MaxService = function() {

    this.calculateMax = function(a, b) {
        return Math.round(a / (1.0278 - 0.0278 * b));
    };
    
    this.calculatePercentages = function(a) {
        return [
            {name: '50%', weight: Math.round(a * 0.50)},
            {name: '55%', weight: Math.round(a * 0.55)},
            {name: '60%', weight: Math.round(a * 0.60)},
            {name: '65%', weight: Math.round(a * 0.65)},
            {name: '70%', weight: Math.round(a * 0.70)},
            {name: '75%', weight: Math.round(a * 0.75)},
            {name: '80%', weight: Math.round(a * 0.80)},
            {name: '85%', weight: Math.round(a * 0.85)},
            {name: '90%', weight: Math.round(a * 0.90)},
            {name: '95%', weight: Math.round(a * 0.95)}
        ]
}

};

angular.module('oneRepMax').service('MaxService', MaxService);


