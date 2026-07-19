let student = {
    name: "riya",
    age: 23,
    city: "kashipur"
};

//mostly make it const
const item = {
    name: "Jewellery box",
    price: 455,
    discount: "45%",

};


//making a post content
const post = {
    username: "RiyaSharma61",
    content: "capturing my own life..",
    likes: 143,
    reposts: 5,
    tags: ["@riyaJI", "Maincharcter loading", "@divaRawat"],
};

//making a random number guessing game
let max = prompt("Enter a number that will be max: ");
const random = Math.floor(Math.random() * max) + 1;
// console.log(random);//optional

let guess = prompt("guess the number: ");
while(true){
    if(guess == "quit"){
        console.log("User quitted..");
        break;
    }
    if( guess == random){
        console.log("congrats!! you guessed right..");
        console.log("The random number is: ", random);
        break;
    } else if( guess < random){
        guess = prompt("Your guess was too small, try again..");
    } else {
        guess = prompt("Your guess was too big, try again..");
    } 




    // } else {
    //     guess = prompt("You entered wrong! Guess again..");
    // }
}