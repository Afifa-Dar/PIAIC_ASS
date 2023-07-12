// Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.
var geustList = ['Tai Ammi', 'Nano', 'Aani', 'Bushra Khala', 'Tayyaba khala'];
var invite = function () {
    for (var _i = 0, geustList_1 = geustList; _i < geustList_1.length; _i++) {
        var invit = geustList_1[_i];
        console.log("Hyee ".concat(invit, " I would like you to invite on a dinner"));
    }
};
invite();
console.log("\n\tTotal number of Guests: ".concat(geustList.length));
console.log('\n\t We found a bigger dinner table\n');
geustList.unshift('Musfira');
geustList.splice(2, 0, 'Aisha');
geustList.push('sabeha');
console.log('\n\t**New Invitation!!**\n');
invite();
console.log("\n\tTotal number of Guests: ".concat(geustList.length));
console.log('\n\n\tyou can invite only two people for dinner\n\n');
while (geustList.length > 2) {
    var name_1 = geustList.pop();
    console.log("We are sorry ".concat(name_1, "! We cant invite you for the dinner..."));
}
invite();
console.log("\n\tTotal number of Guests: ".concat(geustList.length));
