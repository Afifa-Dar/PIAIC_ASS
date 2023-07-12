// You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. 
// Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
console.log('a' == 'A');
console.log('a' != 'A');
console.log('aA' == 'Aa');
console.log('aA' != 'Aa');
// • Tests using the lower case function
console.log('a' == 'A'.toLowerCase());
console.log('a' != 'A'.toLowerCase());
// • Numerical tests involving equality and inequality, 
// greater than and less than, greater than or equal to, and less than or equal to
console.log(2 >= 3);
console.log(2 <= 3);
console.log(2 > 3);
console.log(2 < 3);
// • Tests using "and" and "or" operators
var a = 3;
var b = 4;
console.log(a > b && a < 2);
console.log(a > b || a < 2);
// • Test whether an item is in a array
var array = [2, 4, 5];
console.log(array.includes(4));
console.log(array.includes('4'));
// • Test whether an item is not in a array
console.log(!array.includes('4'));
console.log(!array.includes(2));
