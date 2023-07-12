// You just found out that your new dinner table won’t arrive in time for the dinner, 
// and you have space for only two guests.
// • Start with your program from Exercise 16. 
// Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list.
//  Each time you pop a name from your list, 
//  print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. 
// Print your list to make sure you actually have an empty list at the end of your program.

let geustList = ['Tai Ammi' , 'Nano' , 'Aani' , 'Bushra Khala' , 'Tayyaba khala'];

let invite = function()
{for (let invit of geustList){
    console.log(`Hyee ${invit} I would like you to invite on a dinner`)
}}
invite()
console.log('\n\t We found a bigger dinner table\n')

geustList.unshift('Musfira');
geustList.splice(2,0,'Aisha')
geustList.push('sabeha')

console.log('\n\t**New Invitation!!**\n')
invite()

console.log('\n\n\tyou can invite only two people for dinner\n\n')


    while (geustList.length > 2) {
        let name = geustList.pop()
        console.log(`We are sorry ${name}! We cant invite you for the dinner...`)
    }
    


invite()
while(geustList.length > 0){
    geustList.pop()
}

console.log(geustList)