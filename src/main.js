// Write your code here
// 1
// What method would you use to add an element to the end of an array?
let array = [1, 2, 4];
array.push(5);
console.log(array);

// 2 How do you remove the first element from an array?
let array1 = [1, 2, 4];
array1.shift();
console.log(array1);

// 3 What is the difference between splice and slice?
// splice ამატებს, შლის და ცვლის ელემენტს არაიდან. 
let spl = [10, 100, 1000];
// index, delete and change
spl.splice(1, 1, 20);
console.log(spl);

//  and slice axal cvladshi gadmoaqvs elementebi ise rom ar sheicvalos dzveli array.

// 4 How do you find the length of an array?
console.log(spl.length);

// 5 How can you check if an array includes a certain element?
console.log(spl.includes(2));
console.log(spl.includes(10));

//  6 What is the result of calling sort on an array of numbers without a compare function?

let number = [50, 70, 2, 10];
number.sort();  // Sorts stringebsi
console.log(number);

// 7 How do you create a copy of an array?
let copy = number.slice();
console.log(copy);

//  8 How do you reverse the elements in an array?
let cop = number.reverse();
console.log(cop);

// 9 What method can you use to combine two arrays?
let connect = spl.concat(number);
console.log(connect);

// 10 
const array2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],];
console.log(array2[1][2]); // es gpt dan gadmovitane ver mivxvdi ((((

//   Assignment 1:

let cvladi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
cvladi.splice(4, 1, 15);
cvladi.push(11);
cvladi.shift()
console.log("cvladi");

// Assignment 2:

let fruit = ["apple, pineapple, watermelon, kiwi"];
fruit.push("orange");
fruit.unshift("Strawberry");
let lastItem = fruit.pop();
let firstItem = fruit.shift();
console.log(firstItem);
console.log(lastItem);
console.log(fruit);

// Assignment 3:
let color = ["blue, red, green, black, white"];
for(let x = 0; x < color.length; x++) {
    console.log(color[x]);
} 

// Assignment 4:
let array3 = [12, 15, 14, 10, 18];
array3.splice(1, 2, 1, 2);  // barem ertad amovakeli da chavamate
let arrayForThree = array3.slice(-3);
console.log(array3);
console.log(arrayForThree);

// Assignment 5

let saxelebi = ["omexi", "zura", "gigi", "nika", "lamzo"];
saxelebi.sort();
console.log(saxelebi);
saxelebi.reverse();
console.log(saxelebi);

// Assignment 6

let ricxvebi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let index = ricxvebi.indexOf(4);
let check = ricxvebi.includes(11);
// let target = 15;
// let Index = -1;
let check2 = ricxvebi.findIndex(num => num > 4); // es gpt aris ver gavige da leqcize gkitxav.

// for(let d = 0; d < ricxvebi.length; d++) {
//     if (ricxvebi[d] > target){
//         Index = 1;
//         break                                    ver gavige
//     }
// }
// console.log(Index);
console.log(index);
console.log(check);
console.log(check2);

// Assignment 7
//  ver movaswari da shemdeg gavagrzeleb


