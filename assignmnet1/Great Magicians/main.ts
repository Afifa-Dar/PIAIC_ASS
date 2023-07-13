// Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians by adding the phrase 
//  the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magicians = ['john','erik','maaz','sam']

let show_magicians = () =>{
    for (let magician of magicians) console.log(magician)
}
let make_great = () => {
    for (let index in magicians) magicians[index] = `Hello ${magicians[index]}`
}
make_great()
show_magicians()