// Store a person’s name in a variable, 
// and then print that person’s name in lowercase, uppercase, and titlecase.
var personsName = 'Afifa Dar';
console.log(personsName.toLowerCase());
console.log(personsName.toUpperCase());
// for title case
var split = personsName.split(' ');
var titleCase = '';
for (var _i = 0, split_1 = split; _i < split_1.length; _i++) {
    var i = split_1[_i];
    titleCase += i[0].toUpperCase() + i.substring(1) + ' ';
}
console.log(titleCase);
