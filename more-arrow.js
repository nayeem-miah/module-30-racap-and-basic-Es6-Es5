const difference = (x,y) =>x-y;
const multiply = (first, second , third) => first * second * third;


// single parameter or one parameter 
const getAge = ( person) => person.age;


const student ={
    name: 'nayeem',
    age : 45
}
const age = getAge(student);
console.log(age);


const getThird = numbers=>numbers[2];
const third =getThird([ 12 , 23 , 45 , 43]);
console.log(third);

const doubleIt=num=>num*2;

// no parameter
const getPI=() => Math.PI
console.log(getPI());


//  large arrow function  if you want to get anything return from this function ,then you have use the return keywords
const doMath= (x,y,z) =>{
    
    const sum = x+y+z;
    const mult = x*y*z;
    const result = sum+mult;
    return result;
}