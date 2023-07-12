// You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. 
// You’ll have to think of someone else to invite.
// You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
//You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var geustList = ['Tai Ammi', 'Nano', 'Aani', 'Bushra Khala', 'Tayyaba khala'];
var invite = function () {
    for (var _i = 0, geustList_1 = geustList; _i < geustList_1.length; _i++) {
        var invit = geustList_1[_i];
        console.log("Hyee ".concat(invit, " I would like you to invite on a dinner"));
    }
};
invite();
var guestToBeRemove = 'Tayyaba khala';
var newGuest = 'Faria';
console.log("".concat(guestToBeRemove, " cant come for dinner"));
console.log('New guest List is below!!');
var pos = geustList.indexOf("".concat(guestToBeRemove));
geustList[pos] = newGuest;
invite();
