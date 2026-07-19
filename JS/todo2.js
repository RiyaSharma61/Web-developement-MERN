let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click", function (){
    let item = document.createElement("li");
    item.innerText = input.value;

    let itemdel = document.createElement("button");
    itemdel.innerText = "Delete";
    itemdel.classList.add("del");

    
    console.log(input.value);
    item.appendChild(itemdel);

    ul.appendChild(item);
    input.value = "";

    
    console.log("tasks add successfully!");
});

//applied event delegation for new created html element
ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let par = event.target.parentElement;
        par.remove();
        console.log(par, " deleted");
    }    
})

// let delbtn = document.querySelectorAll(".del");
// for(let del of delbtn){
//         del.addEventListener("click", function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();

//     });
// }