'use strict';

//1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

//2.Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);

//3.Looping over an array
//print all fruits
//a.for
for (let i = 0; i<fruits.length; i++) {
    console.log(fruits[i]);
}

//b.for of 
for (let fruit of fruits) {
    console.log(fruit);
}

//c.forEach
fruits.forEach((fruit) => console.log(fruit));

//4.Addtion, deletion, copy
//push: add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the benigging
fruits.unshift('🍓', '🥭');
console.log(fruits);

//shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

//note!! shift, unshift are slower than pop, push
//splice: remove an item by index position
fruits.push('🍓', '🍑', '🥭');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '🍏', '🍉');
console.log(fruits);

//conbine two arrays
const fruits2 = ['🍐', '🍊'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5.Searching
//index0f: find the index
console.clear();
console.log(fruits);
console.log(fruits.index0f('🍎'));
console.log(fruits.index0f('🍉'));
console.log(fruits.index0f('🍊'));

//includes
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🍊'));

//lastIndex0f
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.index0f('🍎'));
console.log(fruits.lastIndex0f('🍎'));







