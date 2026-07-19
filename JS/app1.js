//practising question 1.
let number = Number(prompt("Enter a number"));
if(number%10 == 0){
    console.log("This is a Good number!");
} else{
    console.log("This is a Bad Number!");
}


//practice 2
//user's name and age
let name = prompt("Enter your Name:");
let age = Number(prompt("Enter your age:"));
alert(` ${name} is ${age} years old`);

//practice 3
//switch statement
let quarter = Number(prompt("Enter Quarter number:"));
switch(quarter){
    case 1:
        console.log("January, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default:
        console.log("ERROR");
}


//practice 4
let str = prompt("Enter a String:");
if((str[0]=='A' || str[0]=='a') && str.length>5){
    console.log("Golden String!!");
}else{
    console.log("Fuck String!!");
}

//practice 5
//largest number
let num1 = 4;
let num2 = 45;
let num3 = 10;

if((num1 >= num2)&&(num1 >= num3)){
    console.log(`${num1} is largest number here!`);
} else if((num2 >= num1) && (num2 >= num3)){
    console.log(`${num2} is the largest number!!`);
}else {
    console.log(`${num3} is the largest number!!`);
}

//practice 6
//checking the last two digits of two numbers if they both are same or not
let num11 = 45;
let num22 = 42654645;
//n is not defined , beacuse here num11 and num22 is number....
if(num11%100 == num22%100){
    console.log("The last two digits are the same of ", num11, " ", num22);
} else {
    console.log("Mehnat waste........");
}