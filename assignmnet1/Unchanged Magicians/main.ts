// Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array. 
// Call show_magicians() with each array to show that you have one array of the original names 
// and one array with the Great added to each magician’s name.

let magicians = ['john','erik','maaz','sam']

let show_magicians = (array) =>{
    for (let magician of array) console.log(magician)
}
let make_great = () => {
    let greet_msgs = Array()
    for (let index in magicians) greet_msgs.push(`Hello ${magicians[index]}`)
    return greet_msgs
}
let great = make_great()
show_magicians(magicians)
show_magicians(great)