// Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array. 
// Call show_magicians() with each array to show that you have one array of the original names 
// and one array with the Great added to each magician’s name.
var magicians = ['john', 'erik', 'maaz', 'sam'];
var show_magicians = function (array) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var magician = array_1[_i];
        console.log(magician);
    }
};
var make_great = function () {
    var greet_msgs = Array();
    for (var index in magicians)
        greet_msgs.push("Hello ".concat(magicians[index]));
    return greet_msgs;
};
var great = make_great();
show_magicians(magicians);
show_magicians(great);
