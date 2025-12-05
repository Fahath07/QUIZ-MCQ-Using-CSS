/*console.log(a);
//hosting
var a = 10;
//global scope /function scope
console.log(a);


//ES6
//let and const
//console.log(b); 
//reference error
//temporal dead zone
let b = 20;
b=130;
//block scope
console.log(b);

//{
//let b = 50;
//console.log(b);
//}
console.log(c);
const c=40;
c=70;

console.log(c);

*/

//function
// named fumction
//1.function declaration
function namedfunc(){
    console.log("Namedfunction called ");
    console.log("Namedfunction called ");
    console.log("Namedfunction called ");
} 

//2.function call/invocation
namedfunc();
//function expression
let  funcExp = function(){
    console.log("Function expression called");
}
funcExp();

//3.arrow function(ES6)
let arrow = ()=>{
    console.log("Arrow function called");
}

arrow();

//4.callback function and IIFE(Immediately invoked function expression)
(()=>{
    console.log("callback function called")})();