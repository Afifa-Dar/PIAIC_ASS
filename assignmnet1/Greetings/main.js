// Start with the array you used in Exercise 11, 
// but instead of just printing each person’s name, 
// print a message to them. The text of each message should be the same, 
// but each message should be personalized with the person’s name.
var frndz = ['Aisha', 'Tehreem', 'Sabeha', 'Laiba'];
for (var _i = 0, frndz_1 = frndz; _i < frndz_1.length; _i++) {
    var msg = frndz_1[_i];
    console.log("Hello! ".concat(msg, " How are you ??"));
}
