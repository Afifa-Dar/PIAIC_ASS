// Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians by adding the phrase 
//  the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magicians = ['john', 'erik', 'maaz', 'sam'];
var show_magicians = function () {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
};
var make_great = function () {
    for (var index in magicians)
        magicians[index] = "Hello ".concat(magicians[index]);
};
make_great();
show_magicians();
