//printing poem
function poemWriting(){
    console.log("Twinkle Twinkle little star");
    console.log("how I wonder what you are..");

}
poemWriting();


//create a function to roll a dice
function rollDice(){
    let rand = Math.floor(Math.random()*6)+1;
    console.log(rand)
}
rollDice();

//calculate average of three numbers
function calAvg(a, b, c){
    let avg = (a+b+c)/3;
    console.log("average : ", avg);
}
calAvg(10, 15, 20);


//function that create multiplication table of n number by user
function calTable(n){
    for(let i=n; i<=n*10; i+=n){
        console.log(i);
    }
}
calTable(15);


//function for getting sum from 1 to n
function getSum(n){
    let sum =0;
    for(let i=0; i<=n; i++){
        sum+= i;

    }
    return sum;
}

//function that returns the concatenated string of an array of strings
let str = ["hi", "my", "name", "is", "RIYASHARMA"];
function concat(str){
    let result = "";
    for(let i=0; i<str.length; i++){
        result+= str[i];
    }
    return result;
}
