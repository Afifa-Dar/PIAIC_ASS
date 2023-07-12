// Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var users = ['Afifa', 'aisha', 'laiba', 'admin', 'jia'];
var greeting = function () {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        if (user == 'admin')
            console.log("Hello ".concat(user, ", would you like to see a status report?"));
        else
            console.log("Hello ".concat(user, ", thank you for logging in again"));
    }
};
var removingAllUsers = function () {
    while (users.length != 0)
        users.pop();
};
removingAllUsers();
if (users.length == 0)
    console.log('We need to find some users!');
else
    greeting();
