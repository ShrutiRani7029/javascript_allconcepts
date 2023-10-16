let dishes = ['Biryani', 'chat', 'Kulfi'];
console.log(dishes[0]);
console.log(dishes[4]);

console.log(dishes)
//modify the array : original array modify nhi hoti bs copy milti hai
dishes[0] = "chicken";
console.log(dishes);

//join methods : join two elements of array
console.log(dishes.join(''));
console.log(dishes.join('-'));

//indexOf
console.log(dishes.indexOf('chat')); // javascript case sensitive hote agar chat ke jgh Chat hota to -1

//concat method //immutable
let newdishes = ["icecream", "shake"];
console.log(dishes.concat(newdishes));

//length method
console.log(dishes.length);
console.log(dishes);

//push method : return new length of an array
let u=dishes.concat(newdishes);
console.log(u.push("bhalley"));
console.log(u);

//pop() method
console.log(dishes.pop());
console.log(dishes);

//boolean values and comparision operator
let b=true;
let s="true";
let t=67;

console.log(typeof b, typeof s,typeof t);

//includes in array;
let abc="www.meshru";
let def="@gmail.com";

let hjk=abc.concat(def);
console.log(hjk);

let jkl=abc.includes("@");
console.log(jkl);

//push function comes under mutatng methods as it changes the original array
let num=[1,2,3];
console.log(num.length);
num.push(5);
num.push(6);
console.log(num);
console.log(num.length);

//indexOf() comes under non-mutating;
let words=["cat","dog","rabbit"];
let num1=words.indexOf("dog");
let num2=words.indexOf("fox");

console.log(num1);
console.log(num2);







