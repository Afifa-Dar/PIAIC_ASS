// Store a person’s name in a variable, 
// and then print that person’s name in lowercase, uppercase, and titlecase.

const personsName = 'Afifa Dar';

console.log(personsName.toLowerCase());
console.log(personsName.toUpperCase());

// for title case
var split = personsName.split(' ');
var titleCase = '';
for (let i of split){
    titleCase+=i[0].toUpperCase() + i.substring(1,) + ' ';
}
console.log(titleCase);