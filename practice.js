// Variables in js

let a = 10;
let b = 20;
let c = 30;
console.log(a + b + c);

// Operators in js
let x = 10;
let y = 20;
let z = 30;
console.log(x + y + z);
console.log(x - y - z);
console.log(x * y * z);
console.log(x / y / z);
console.log((x % y) % z);
console.log(x ** (y ** z));
console.log(x++);
console.log(x--);
console.log((x += y));
console.log((x -= y));
console.log((x *= y));
console.log((x /= y));
console.log((x %= y));
console.log((x **= y));
console.log(x == y);
console.log(x != y);
console.log(x === y);
console.log(x !== y);
console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log(x && y);
console.log(x || y);
console.log(x & y);
console.log(x | y);
console.log(x ^ y);
console.log(x << y);
console.log(x >> y);
console.log(x >>> y);

// Conditional Statements in js
let age = 18;
if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

// Loops in js
// while loop
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// do while loop
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 10);

// break and continue in js
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

// Functions in js
function add(a, b) {
  return a + b;
}
console.log(add(10, 20));

// Objects in js
let person = {
  name: "Rudra",
  age: 22,
  gender: "Male",
  address: {
    city: "New York",
    state: "NY",
    country: "USA",
  },
};
console.log(person.address.city);

// Arrays in js
let arr = [1, 2, 3, 4, 5];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

// Array Methods in js
let arr2 = [1, 2, 3, 4, 5];
console.log(arr2.length);
console.log(arr2.push(6));
console.log(arr2.pop());
console.log(arr2.shift());
console.log(arr2.unshift(0));
console.log(arr2.reverse());
console.log(arr2.sort());
console.log(arr2.slice(0, 2));
console.log(arr2.splice(0, 2));
console.log(arr2.concat([6, 7, 8]));
console.log(arr2.join(" "));
console.log(arr2.toString());
console.log(arr2.indexOf(3));
console.log(arr2.includes(3));
console.log(arr2.every((item) =>
    item > 0));



// 
