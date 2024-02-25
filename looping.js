// for of used in array or string and not used in objects 
//  for in used in objects .

const numbers = [34,56,78,86];
// for (let i = 0 ; i<numbers.length ; i++){ 
// }
// while{}
//  for of 
//  array looping
for ( const number of numbers){
    // console.log(number);
}

//  string looping 
const nobab = 'Nobab siraj ud Doula';
for ( const char of nobab){
    // console.log(char);
}


// Object looping
const glass = {
    name : 'glass',  // name: ---->property or keys and 'glass'----> is property value
    color : 'orange',
    price : 12,
    isClean : true
}

// type error glass is not difinde
// for ( const key of glass){
//     console.log(key);
// }
for ( const key in glass){
    const value = glass[key];
    // console.log(key,value);
}


const keys = Object.keys(glass);
// const value = Object.values(glass);
console.log(keys);
for ( const key of keys){
    const value = glass[key]
    console.log(key, value);
}