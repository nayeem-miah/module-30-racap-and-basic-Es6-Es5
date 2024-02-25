const actor ={
    name: 'ananto',
    age : 30,
    phone : '01849317388',
    money  : 23454756768
}
const {phone, age: boyos} = actor;
// const age = actor.age;
// console.log(age);

//  if right side is an objects of destructuring will be objects as well
// use property name is variable that contains the property value
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(boyos);



//  -------------------------->
const person={
    name : 'nayeem islam',
    home : 'mymensingh',
    work : 'work at student'
}
// const home = person.home;

const {work , home} = person;
const {name : YourName} = person;
console.log( home , work);

console.log(home);
console.log(home);
console.log(home);
console.log(home);
console.log(work);
console.log(YourName);


//  array destructuring .
const number= [34, 56];
const [first, second]=number;
console.log(first)
console.log(second)
console.log(first + second);

const [x, y] = [23, 45];

console.log(x*y/4);  // ans is =258.75;


function  doubleThemL(a, b){
    return [ a*2, b*2];
}

const [ prothom , ditio] = doubleThemL(56,7);
console.log(prothom,'and' ,ditio);