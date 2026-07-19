//.trim
let password = "  f*sdfhwg        ";
let newPass = password.trim();

console.log(newPass);


let upper = password.toUpperCase();
console.log(upper);

let low = password.toLowerCase();
console.log(low);


//now practice Qs of JS-3
let msg = "hello";
console.log(msg.trim().toUpperCase());

//qs 2
let name = "Apna College";
let one = name.slice(4,9); //---> " Coll"
let two = name.indexOf("na"); //---> 2
let three = name.replace("Apna", "Our"); //---> "Our College"

//outputs
console.log(one, " & ", two, " & ", three );
//qs3
let newname = name.slice(5).replace("l", "t").replace("l", "t");
console.log(newname);


//practice Qs of JS-3
let start = ['january', 'july', 'march', 'august'];
console.log(start);
start[0] = 'july';
start[1] = 'june';

console.log("After changes: ", start);