/*
Part 1 - Choose
1-map() → Returns a new array of the same length
2-Returns the first element that matches a condition → find()
3-filter() → Returns a new array with elements that passed the condition
4-forEach() → undefined
5-for...of → Arrays
Part 2 - True or False
1-False
2-True
3-True
4-False
5-False
*/
//part 3 
const numbers = [1,2,3,4];
numbers.forEach((num) => {
    console.log(num * 2);
});

const nums = [10,25,5,30,15,40];
const result = nums.filter((num) => num > 20);
console.log(result);

const users = [
    {name:"Farida", age:20},
    {name:"Amr", age:28},
    {name:"Ibrahim", age:30}
];
const user = users.find((item) => item.age > 25);
console.log(user);

const names = ["omar","mona","sara"];
const result2 = names.map((name) => name.toUpperCase());
console.log(result2);
//Part 4
const fruits = ["Apple","Banana","Orange"];

for (const fruit of fruits) {
    console.log(fruit);
}

for (const i in fruits) {
    console.log(i);
}

fruits.forEach((fruit, index) => {
    console.log(`${index} -> ${fruit}`);
});
//Part 5
const sum = (a, b) => a + b;

const user = { name: "Omar", age: 25 };
const { name, age } = user;

console.log(`Hello ${name}`);

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const merged = [...arr1, ...arr2];
//Part 6
const students = [
    {name:"Ali", degree:70},
    {name:"Sara", degree:95},
    {name:"Ahmed", degree:40},
    {name:"Mona", degree:85},
    {name:"Omar", degree:55}
];

const names = students.map((s) => s.name);

const passed = students.filter((s) => s.degree >= 60);

const topStudent = students.find((s) => s.degree > 90);

students.forEach((s) => console.log(s.name));
//Bouns
const numbers = [5,10,15,20];

const total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(total); // 50