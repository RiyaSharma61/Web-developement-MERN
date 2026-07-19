for(let i = 0; i<=5; i++){
    console.log(i);
}

for(let i = 1; i<=15; i=i+2){
    console.log(i);
}

console.log("backward condition:");
for(let i=15; i>=1; i=i-2){
    console.log(i);
}

console.log();
console.log();
for(let i=2; i<=10; i=i+2){
    console.log(i);
}

console.log("table of 5:\n");
for(let i=5; i<=50; i=i+5){
    console.log(i);
}

//nested loop
console.log("nested loop");
for(let i=1; i<=3; i++){
    for(let j=1; j<=3; j++){
        console.log(j);
    }
}

//fav movie activity
// console.log("Favourite Movie Activity");
// let favMovie = "Fidaa";
// let guess = prompt("Guess my fav movie???");
// while((guess != favMovie)){
    
//     if(guess == "quit"){
//         console.log("you quit");
//         break;
//     }

//     guess = prompt("Wrong guess. Guess movie again");
//     if(guess == favMovie){
//         console.log("Right movie");
//     }
// }


//loops with arrays
let farr = ["apple", "mango", "litchi", "banana", "orange", "melon"];
console.log("fruits printing or traversing of the fruits array...........");
for(let i= 0; i<farr.length; i++){
    console.log(i, farr[i]);
}

//nested loops with nested arrays
let student =[["Anam", 45], ["divya", 85], ["gargi", 96]];
for(let i=0; i<student.length; i++){
    console.log(`info of student #${i+1}`);
    for(let j=0; j<student[i].length; j++){
        console.log(`${student[i][j]}`);
    }
}
//for of loop
let chars = ['a', 'b', 'c', 'd', 'e'];
for(ch of chars){
    console.log(ch);
}












