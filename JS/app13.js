let form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    console.log("Form submitted!");
});
let inp1 = document.querySelector("#user");
inp1.addEventListener("mouseout", function(e){
    console.log("mouse is moved out from inp1!!!");
});

form.addEventListener("mouseout", function(e){
    console.log("mouse is moved out!!!");
});
inp1.addEventListener("keypress", function(e){
    console.log("key is pressed ",e.key );
})
let div = document.querySelector("#one");
div.addEventListener("scroll", function(e){
    console.log(this.scrollTop);
    console.log(this.scrollLeft);
});
window.addEventListener("load", function(){
    console.log("window loaded successfully!!!!");
});
let btn = document.querySelector("button");
btn.addEventListener("click", function(){
    btn.style.backgroundColor = "green";
});
let inp2 = document.querySelector("#myname");
let h2 = document.querySelector("h2");

inp2.addEventListener("input", function(e){
    let valid = this.value.replace(/[^a-zA-z ]/g, "");
    this.value = valid; //updation of this 's value
    h2.innerText = valid;
})