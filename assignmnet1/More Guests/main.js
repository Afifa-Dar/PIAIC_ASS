// You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. 
// Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
//• Use append() to add one new guest to the end of your list. 
//• Print a new set of invitation messages, one for each person in your list.
var geustList = ['Tai Ammi', 'Nano', 'Aani', 'Bushra Khala', 'Tayyaba khala'];
var invite = function () {
    for (var _i = 0, geustList_1 = geustList; _i < geustList_1.length; _i++) {
        var invit = geustList_1[_i];
        console.log("Hyee ".concat(invit, " I would like you to invite on a dinner"));
    }
};
invite();
console.log('\n\t We found a bigger dinner table\n');
geustList.unshift('Musfira');
geustList.splice(2, 0, 'Aisha');
geustList.push('sabeha');
console.log('\n\t**New Invitation!!**\n');
invite();
