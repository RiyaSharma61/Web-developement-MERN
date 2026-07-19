//1.
let arr1 = [7, 9, 0, -2];
let n = 3;
console.log(arr1.slice(0,n));

//2.
let arr2 = [7, 9, 0, -2];
let m = 3;
console.log(arr2.slice(-m));

//3.
let str1 = "";
let str2 = "hey";
console.log(str1.trim().length === 0);
console.log(str2.trim().length === 0);

//4.
let str3 = "HEFKJHghjgijhgh";
console.log(str3[10] === str3[10].toLowerCase());

//5.
let str4 = " nb njefh  !          ";
console.log(str4.trim());

//6.
let arr = ['a', 'b', 'c', 'd'];
console.log(arr.includes('d'));
console.log(arr.includes('e'));