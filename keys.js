const glass = {
    name : 'glass',  // name: ---->property or keys and 'glass'----> is property value
    color : 'orange',
    price : 12,
    isClean : true
}

//  all properties names
const keys = Object.keys(glass);
console.log(keys);
// all property values name 
const value = Object.values(glass);
console.log(value);
//  
const entries = Object.entries(glass);
console.log(entries);



// array of array / two dimensional array 
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'orange' ],
//     [ 'price', 12 ],
//     [ 'isClean', true ]
// ]





console.log(glass);
//   any objects properties delate 
delete glass.isClean;
console.log(glass);



// use districturing delate in objects 
const { price,...isDelate} = glass;
console.log(isDelate);


// freeze : is not change in objects 

// Object.freeze(glass);
// glass.source = 'made in Bangladesh';
// console.log(glass);


// seal:   is  modify in objects as update in obj.
Object.seal(glass);
glass.price = 5000;
glass.weight = '110 ml';
console.log(glass);