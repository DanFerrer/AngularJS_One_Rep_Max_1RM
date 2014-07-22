/**
 * Created by Daniel on 7/12/2014.
 */

var MaxService = function() {

    this.calculate = function(a, b) {
        return Math.round(a / (1.0278 - 0.0278 * b));
    };

    this.reset = function(a, b) {
        return angular.copy(a, b);
    };

};

oneRepMax.service('MaxService', MaxService);