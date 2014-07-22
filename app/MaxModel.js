/**
 * Created by Dan on 7/8/2014.
 */

var MaxModel = function() {

    return {
        weight: 0,
        reps: 0,
        maxWeight: 0,
        percentages: [],
        originalData: angular.copy(MaxModel)
    }

};

oneRepMax.factory('MaxModel', MaxModel);


