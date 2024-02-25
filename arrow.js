// function declaration ------->
// function add( a,b){
//     const result = a + b;
//     return result;
// }

function add( a,b){
    return a+b;
}



// function expression----------->
const add2= function(a,b){
    return a+b;

}

// arrow function 
const add3 = (a,b)=>a+b;
const sum = add3(10 ,5);
console.log(sum);

const sub= (x,y) => x-y;
const minus=sub(5,3);
console.log(minus);


const add4= (a,b,c,d)=> a+b+c+d;
const sumAll=add4(10,20,30,40);
console.log(sumAll);

// arrow multiply---->
const mult= (a,b)=> a*b;
const multAll=mult(10,20);
console.log(multAll);
