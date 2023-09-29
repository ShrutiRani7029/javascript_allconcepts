let dishes = ['Biryani', 'chat', 'Kulfi'];
console.log(dishes[0]);
console.log(dishes[4]);

//modify the array : original array modify nhi hoti bs copy milti hai
dishes[0] = "chicken";
console.log(dishes);

//join methods : join two elements of array
console.log(dishes.join(''));
console.log(dishes.join('-'));

//indexOf
console.log(dishes.indexOf('chat')); // javascript case sensitive hote agar chat ke jgh Chat hota to -1

//concat method
let newdishes = ["icecream", "shake"];
console.log(dishes.concat(newdishes));

//length method
console.log(dishes.length);

//push method : return new length of an array
let u=dishes.concat(newdishes);
console.log(u.push("bhalley"));

//pop() method
console.log(dishes.pop());

//boolean values and comparision operator
let b=true;
let s="true";

console.log(typeof b, typeof s);

//scope of var, let, & const




