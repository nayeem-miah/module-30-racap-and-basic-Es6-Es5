const max = Math.max(12, 34, 45 ,21,2);

const numbers= [12,3,4,56,64,52,234];
console.log(...numbers);
console.log(Math.max(...numbers));


// use spread operator to copy
const friends =[45,12,34,56];
 const bondho =friends
const dosto = [...friends];
friends.push(100);
console.log(dosto);
console.log(bondho);

const sonka= [...friends, 666];
console.log(sonka);
