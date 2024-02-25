// task 

// task 1 ------------------------------------------------------------------>


// ex 1--------use in arrow multiply 3 numbers
// function mult (a,b,c){
//     return a*b*c;
// }

const mult =(a,b,c) =>  a * b * c;
const ans= mult(4,5,6);
console.log(ans);



// ex--2 -------------use  `` three line print output
const threeLine= 
`iam a web developer.
i love to code .
I love to eat birayne`;
console.log(threeLine);


// ex-3 ------write a arrow function that will take two parameter and one parameter default value;
const twoParameter= (x, y=10) => x+y ;
const add=twoParameter(10);
console.log(add);

// ---------------------------------------------------------------
// task ---2 easy thinking------------------------------>


const friends = () => ['rakib', 'monirul', 'sabit','jakuan','Nayeem'];
let newFridens=[];
const bondho = friends();
// console.log(bondho);
for(const name of bondho){
const length = name.length;
// console.log(length);
    if (length %2 === 0){
        console.log(name);
        
    }
}


// task 3--------------------------->
const squre = ([a=0,b=0,c=0,d=0])=>a*a + b*b + c*c + d*d;
const num = squre([5,3,6,9]);
const ava = num/(squre.length+1);
console.log('the number squre then sum and then average is :',ava);

// ----------------------------------------------------------------------------->
// task 5------------------>
const maxNumber = arr => Math.max(...arr);
const numbers = [12,3,4,56];
const numbers2 = [64,52,234];

let newArray = [...numbers,...numbers2]
// const join = numbers.concat(numbers2);
console.log(newArray);
const max = maxNumber((newArray));
console.log('max numbers  is :',max);

// extra 
const aarr=[10,20,40];
const arr2 = [ 45 ,67 ,78];
const  newArr=([...aarr,...arr2]);
console.log(newArr);
const big= Math.max(...newArr);
console.log(big)