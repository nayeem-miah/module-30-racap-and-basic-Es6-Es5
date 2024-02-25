//  default ---> if value is not provided , take this as a default
function add ( num1= 90 , num2= 0){
    const result = num1+ num2;
    console.log( num1, num2, result);
    return result;

}
// const sum =add(67,7);
// 67 undefined NaN use one parameter
// const sum =add(67);

// undefined undefined NaN use no parameter
const sum =add();

function fullName(firstName, lastName=''){
    const full= firstName+ ' '+lastName;
    return full;
}

function friends (numbs= []){

}

function persons (human={}){
    
}