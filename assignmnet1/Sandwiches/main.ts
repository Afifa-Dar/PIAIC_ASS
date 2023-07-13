// Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. 
// Call the function three times, using a different number of arguments each time.
 
let order_sandwiches = (...order) =>{
    for (let o of order) console.log(`sandwich has been order by ${o}`)
} 
order_sandwiches('john','erik','maaz','sam')
order_sandwiches('john','maaz','sam')
order_sandwiches('john')