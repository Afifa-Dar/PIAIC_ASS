// Think of your favorite mode of transportation, 
// such as a motorcycle or a car, 
// and make a list that stores several examples. 
// Use your list to print a series of statements about these items, 
// such as “I would like to own a Honda motorcycle.”
var favTransport = 'car';
var opt = ['civic', 'cultus', 'prado'];
for (var _i = 0, opt_1 = opt; _i < opt_1.length; _i++) {
    var o = opt_1[_i];
    console.log("I would like to own a ".concat(o, " ").concat(favTransport));
}
