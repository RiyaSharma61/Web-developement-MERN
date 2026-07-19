let para = document.createElement("p");
para.innerText = "Hi, I am riya sharma.";

document.querySelector("body").append(para);
para.classList.add("red");

//adding another element
let blue = document.createElement("h3");
blue.innerText = "I'm a blue H3!";
document.querySelector("body").append(blue);
blue.classList.add("blue");

//doing the 3rd question
let div = document.createElement("div");
let h1 = document.createElement("h1");
let p = document.createElement("p");

h1.innerText = "I'm in a div";
p.innerText = "ME TOO!";
document.querySelector("body").append(div);
document.querySelector("div").append(h1, p);

div.classList.add("pinkBg", "border");

//assignment question 1
let input = document.createElement("input");
let button = document.createElement("button");

button.innerText = "Click Me!";
let body = document.querySelector("body");
body.append(input, button);

//assignment question 2
input.placeholder = "username";
button.id = "btn";

//assignment question 3
let newbtn = document.querySelector("#btn");
newbtn.classList.add("btnstyle");

//assingment question 4
let newh1 = document.createElement("h1");
newh1.innerText = "DOM Practice";

body.append(newh1);
newh1.classList.add("h1style");

//assignment question 5
let newp = document.createElement("p");
newp.innerHTML = "Apna College <b>Delta</b> Practice";
body.append(newp);