// Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs, 
// such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.
var car_obj = function (manufacturar, model) {
    var features = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        features[_i - 2] = arguments[_i];
    }
    var obj = { 'manufacturar': manufacturar, 'model': model };
    if (features.length != 0) {
        for (var _a = 0, features_1 = features; _a < features_1.length; _a++) {
            var o = features_1[_a];
            for (var val in o) {
                obj[val] = o[val];
            }
        }
    }
    return obj;
};
console.log(car_obj('toyota', '2020', { 'color': 'blue' }, { 'AC': 'on' }));
