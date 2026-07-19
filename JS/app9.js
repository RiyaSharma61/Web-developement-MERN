try{
    console.log(a);
} catch(e) {
    console.log("variable doesn't define and declared");
    console.log(e);
}

//practice Qs- arrow function
//QS-1 returns the square of a number n

const squareNum = (n) => {
    return n*n;
}
//both are correct
// const squareNum = n => (
//     n*n
// );

//QS-2
//function that returns hello world with the inteval of 2s and 5 times
let fnc = () => {
    console.log("Hello World");
}
let intervalFnc = setInterval(fnc, 2000);
setTimeout((()=>{
    clearInterval(intervalFnc);
    console.log("clear function...");
}), 10000)

//QS-1 of assignment of JS-7    
const arrayAverage = (arrNum) => {
    let sum = 0;
    for(let i=0; i<arrNum.length; i++){
        sum = sum + arrNum[i];
    }
    let avg = sum / arrNum.length;
    return avg;
}

//  QS-2    
const isEven = (n)=>{
    if(n%2 == 0){
        return n;
    } else{
        console.log("Odd number..");
    }
}