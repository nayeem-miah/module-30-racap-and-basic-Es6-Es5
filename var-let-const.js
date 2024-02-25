//  var: no reason to use var
//  let : allow it to reassign 
//  const : do not allow it to reassign

const money = 25;
//  Assignment to constant variable.
// money = money+ 25;
// console.log(money);

const rich = money+ 25;
console.log( rich);



// let means ----> value change but const value is not change
let count = 0 ;
count = count + 10;
console.log(count);


const numbers = [ 12, 34, 545 , 32];
// numbers= [ 4,3,2];
numbers[1]= 55;
numbers.push(34,67,77)
console.log(numbers);


// use objects 
const students={
    name: ' moina pakhi',
    class: 12
}
// Assignment to constant variable.
// students = { name: ' khokil'}
console.log(students);
let student={
    name: ' moina pakhi',
    class: 12
}
// change value if you use in let variable
student = { name: ' khokil'}
console.log(students);


// loop use kora 

// for( const i = 0 ; i<=12; i++){
//     console.log(i);
// }
//  use let variable in  a loop
let sum=0;
for( let i = 0 ; i<=12; i++){
    sum = sum+ i;
}
console.log(sum);