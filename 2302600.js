
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);

let counter = 2;
const preIncrement = ++counter;

console.log(`preIncrement: ${preIncrement}, counter: ${counter}`)
const postIncrement = counter++;

console.log(`postIncrement: ${postIncrement}, counter: ${counter}`)
preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`)
preDecrement = --counter;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`)


console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

 // 6. Logical operators: or and not 
const valuel = false;
const value2 = 4 < 2;

 //  || (or)
 console.log(`or:${value1 || value2 || check()}`);


// && (and)
console.log(`and:${value1 && value2 && check()}`);


// ! (not)
console.log(!value1);


// 7. Equality
const stringFive = '5'
const numberFive = 5;


// == loose equality , with typr conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);


// strick equality, no type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);


// object equality by reference
const ellie1= { name: 'ellie' };
const ellie2= { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);


// equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);