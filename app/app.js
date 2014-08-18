/**
 * Created by Daniel on 7/9/2014.
 */

(function() {
    angular.module('oneRepMax', []).constant('repValidation',  {
        title: 'Angular 1RM Calculator',
        version: '0.0.1',
        MIN_REPS: 1,
        MAX_REPS: 10,
        MIN_WEIGHT: 1
    });
})();

