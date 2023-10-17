//Anonymous function: Arguements being passed to higher order functions or used for constructing result of higher order functions;

//function declaration (without parameter)
function fun(){
    console.log("hello");
}
//function call
fun();


//with parameter
let func=function(name){
    console.log(`hello ${name} you are invited`);
}
func('coder');

//lets find the age using function with parameter

let agecalc=function(birthyear, curryear){
    let age=curryear-birthyear;
    console.log(`Current Age : ${age}`);
}
agecalc(2002,2023);

///Another important concept **Arrow Function(ES6)**
/*
-special form of function and more faster than normal function as :
 - no need o use function keyword, no need to use parenthesis(in single parameter), if single line of code then4
  - no need of curly braces + return statement

*/

//example1:
let arrowfunc = name => `welcome to ${name}, it is more faster`
console.log(arrowfunc("Arrow Function"));

//example2:
let operation = (a,b) => {
    let op=a*b;
    return op;
}
console.log(operation(2,3));



///passing function as arguement (--> higher order function)
let uppercase = function(str)
{return str.toUpperCase();
}

let lowercase = function(str)
{
    return str.toLowerCase();
}

let transformer=function(str,fun){
    return fun(str);
}

console.log(transformer("SHRUti",lowercase));
console.log(transformer("SHRUti",uppercase));


///function returning another function
let fun1=function(msg){
    return function(name){
        console.log(`${msg} ${name}`);
        return true;
    }
}

fun1("god bless you")("shruti")

let fun2=fun1("good coder");
fun2("shru");


///IIFE: Immediately invoked function expression
(function(n){
    console.log("never execute",n);
})

///Timer Function:
/*
1.setTimeOut : Run function "once" after interval of time
2.setInterval : Run function immediately
*/
function greeting (name){
  console.log(`welcome ${name}`);
}
setTimeout(greeting,67890,"neha");
//setInterval(greeting,1000,"shruti");


///var ki declaration upar hoist ho jati hai (not with let,const)
test=10; ///assigning 
console.log(test);
var test; ///declaration

///normal function declaration bhi hoist hoti hai
/*test()
function test(){
    console.log("hello");
}*/

///hoisting not applicable in arrow function & function expression
/*best()
let best = () => {
    console.log("hello");
} ///->error
*/

///higher order function: callback fnc(), closure
//callback fnc()
var sum = function(a,b)
{
   return a+b;
}
function fx(callbackfun) {
   // You can use the callback function here
   var result = callbackfun(3, 4); // Example usage of the callback function
   console.log(result);
}
fx(sum);//calling callback function


//closure: other function can be inner return value
//function returning function
function makefunc(){
    const name="rani";
    function display(){
        console.log(name);
    }
    return display;
}
const my=makefunc();
my();
///isme functionality as displayname, but can access "name" variable.


///IIFE : Imediately Invoked Function Expression : expression exrecuted immediately
(function (){
   console.log("hilo");
})  ();





















































