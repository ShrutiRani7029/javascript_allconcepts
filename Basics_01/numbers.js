

let score = 50;
console.log(score,typeof score);

//Mathematical operators
let result=score/2; ///give quotient
console.log(result);

let res=score%2; ///give remainder
console.log(res);


//Mathematical Expression
//using priority: brackets(), power operation(**), * / % (left to right), + - (left to right)
let re= score * 2 + (4*3) - 8/2 % 4;
console.log(re);

//concatenation of numbers
let resultline='My total score is = ' + result;
console.log(resultline);

///Dynamic conversions are normal in javascript
///loose equality(==) vs strict equality(===) : return boolean value
//loose equality: focus only on value but not type
//strict equality: focus on value+type

let age=22;
console.log(age=="22"); //return true

console.log(age==="22"); //return false here


///type conversion
//string to number : NUMBER METHOD : HERE PASSING STRING MUST BE OF NUMERIC VALUES
let s= "12";
console.log(s,typeof s);

let n= Number(s);
console.log(n,typeof n);

//number to string : STRING METHOD : HERE PASSING STRINGS CAN BE OF NUMERIC VALUES AS WELL
let num=54;
let str=String(num);
console.log(str, typeof str);

///boolean methods: true/false
let cage="32";
let bool = Boolean(age);
console.log(bool);


///looping




