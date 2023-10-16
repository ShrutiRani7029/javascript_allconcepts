
let first_name ="Shruti";
let last_name = "Rani";

console.log(first_name,last_name);


//using template_literals
let full_name=`My name is ${first_name} ${last_name}`;
console.log(full_name);

//using + operator
 let hello='you can also say' + " " + first_name;
 console.log(hello);

 //reach index of string
 console.log(first_name[5]); //remember 0-based indexing

 //USING FUNCTION LIKE toLocalLowerCase(), toUpperCase(), indexOf
 console.log(first_name.toLowerCase());
 console.log(first_name.toUpperCase());
 console.log(last_name.indexOf("a"));

 //common string methods: trim(), lastIndexOf
 let text = "      Hello World!        ";
let result = text.trim();
console.log(result);

console.log(result.lastIndexOf("uio")); ///-1: not exist

//particular string allowed or not
console.log(result.includes("World")); //includes return boolean value

//slice method(): returns selected elements in an array - as new array, does not change new array.
let name="wowcoder"
console.log(name.slice(0,4)); //means included(0-3)

//string split method(): by using this hm sentence se word nikal skte aur word se character
let favcolors= "Brown Blue Black";
let arrcolors= favcolors.split(',');
console.log(arrcolors); ///return array

///javascript me strings immutable hote, hm ise modify nhi kr skte but hm add, remove kr skte..
let str="Hello";
str[0]="u";
console.log(str); ///ans is still Hello

str=str+'beautiful';
console.log(str);


















