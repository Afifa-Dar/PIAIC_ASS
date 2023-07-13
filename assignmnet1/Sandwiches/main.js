// Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. 
// Call the function three times, using a different number of arguments each time.
var order_sandwiches = function () {
    var order = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        order[_i] = arguments[_i];
    }
    for (var _a = 0, order_1 = order; _a < order_1.length; _a++) {
        var o = order_1[_a];
        console.log("sandwich has been order by ".concat(o));
    }
};
order_sandwiches('john', 'erik', 'maaz', 'sam');
order_sandwiches('john', 'maaz', 'sam');
order_sandwiches('john');
