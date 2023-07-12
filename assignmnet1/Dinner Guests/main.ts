// Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.

let geustList = ['Tai Ammi' , 'Nano' , 'Aani' , 'Bushra Khala' , 'Tayyaba khala'];

let invite = function()
{for (let invit of geustList){
    console.log(`Hyee ${invit} I would like you to invite on a dinner`)
}}
invite()
console.log(`\n\tTotal number of Guests: ${geustList.length}`)
console.log('\n\t We found a bigger dinner table\n')

geustList.unshift('Musfira');
geustList.splice(2,0,'Aisha')
geustList.push('sabeha')

console.log('\n\t**New Invitation!!**\n')
invite()
console.log(`\n\tTotal number of Guests: ${geustList.length}`)

console.log('\n\n\tyou can invite only two people for dinner\n\n')


    while (geustList.length > 2) {
        let name = geustList.pop()
        console.log(`We are sorry ${name}! We cant invite you for the dinner...`)
    }
invite()
console.log(`\n\tTotal number of Guests: ${geustList.length}`)


 

