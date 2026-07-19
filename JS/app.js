console.log("hello, this is console window");
let a = 15;
let b = 10;
console.log("sum is:" , a+b);
// this is just a comment

let age = 19 ;
//by normal string operations
console.log("hello , my name is Riya Sharma and I am "+age+ " years old, in 2026 I'll be "+(++age)+" years old, \nthen I'll be called an adult.");
//by template literals
console.log(`hello , my name is Riya Sharma and I am ${--age} years old, in 2026 I'll be ${++age} years old, 
then I'll be called an adult.`)

//hence i learned the concept of template literals


//now let's learn the arithmetic operators
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);


//now let's learn the new things , that is comparison operator in JS
console.log(age<18);
console.log(age>=18);


//doing first practice question
let color="red";
if(color == "red"){
    console.log("stop here for 60 sec");
}
else if(color == "yellow"){
    console.log("wait for just 30 sec");
}
else if(color == "green"){
    console.log("you may go");
}
else{
    console.log("CONFUSION OCCURS!! - Traffic light is broken")
}

//practice 2 of popcorn
let size =  "S";
if( size === "XL"){
    console.log("The price is Rs. 250");
}
else if(size === "L"){
    console.log("Price is Rs.200");
}
else if(size === 'M'){
    console.log("Price is Rs.100");
}
else {
    console.log("Price is Rs.50");
}

//practice 3 of logical operator
let str = "apple";
if(str[0]==='a' && str.length >3){
    //str.length use for checking the length of the string
    console.log(`This is a Good String: ${str}`);
}

//truthy and falsy values
if(true){
    console.log("This is a true value");
} else{
    console.log("this is a false value");
}

//switch statement practice
let col = "blue";
switch(col){
    case "red":
        console.log("red color");
        break;
    case "yellow":
        console.log("yellow color");
        break;
    case "pink":
        console.log("pink color");
        break;
    default :
        console.log("blue color !! finally,....");
}

//switch statements pratice Qs
let day = 8;
switch(day){
    case 1 :
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("NOT FROM WEEK DAYS!!!");
}

//alert trying
// alert("Something is wrong");


//error message
console.error("This is an error message!");

//warning message
console.warn("Warning message from riya sharma");

//prompt dialog box

let firstName = prompt("Enter your First Name: ");
let lastName = prompt("Enter your Last Name: ");

console.log(`My name is ${firstName + " "+ lastName} . 
Welcome here!!`)