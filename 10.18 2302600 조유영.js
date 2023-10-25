//1.Function declaration
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);

//2.Parameters
function changeName(obj) {
    obj.name = 'coder';
}
const young = { name: 'young'};
changeName(young);
console.log(young);

//3.Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log('${message} by ${from}');
}
showMessage('Hi!');

//4.Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
printAll('dream', 'coding', 'young');

//5.Local scope
let globalMessage = 'global';
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
}
printMessage();