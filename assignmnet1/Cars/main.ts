// Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs, 
// such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.

let car_obj = (manufacturar , model , ...features) => {
    let obj = {'manufacturar':manufacturar , 'model' : model}
    if(features.length != 0)
    {
        for(let o of features){
            for(let val in o) {
                obj[val] = o[val]
            }
        }
    }
    return obj

}
console.log(car_obj('toyota' , '2020', {'color':'blue'} , {'AC':'on'}))