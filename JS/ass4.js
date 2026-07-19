//question 1
let arrNum = [1,2,3,4,5,6,2,3];
let num = 2;

let result = [];
for(let i=0; i<arrNum.length; i++){
    if(arrNum[i] != num){
        result.push(arrNum[i]);
    }
}
console.log("Array after removing all the occurences of the num..");
console.log(result);


//question 2
let num1 = 287152;
let count1 = 0; 
let numStr = num1.toString();
for(let i=0; i<numStr.length; i++){
    count1++;
}
console.log(count1);

//question 3
let sum = 0;
for(let i=0; i<numStr.length; i++){
    sum = sum + Number(numStr[i]);
}
console.log(sum);

//question 4
let num2 = 5;
let fact = 1;
//factorial question, so here fact is used to represent the factorial of the given num 2
for(let i=1; i<=num2; i++){
    fact = fact*i;
}
console.log(`Factorial of number ${num2} : ${fact}`);

//question 5
let arrnum = [23, 45, 5, 98, 34, 587, 55, 57, 5478];
let max = arrnum[0];
let maxindx;

for(let i=0; i<arrnum.length; i++){
    if(arrnum[i]>= max){
        max = arrnum[i];
        maxindx = i;
    }

}
console.log(`The maximum of the array is ${max} and the index is ${maxindx}`);