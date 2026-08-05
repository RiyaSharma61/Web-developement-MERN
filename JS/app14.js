const orderFood = new Promise((resolve, reject) =>{
    const kitchenHasFood = true;
    if(kitchenHasFood){
        resolve("here's your pizza");

    }else{
        reject("sorry, we ran out.");//failure
    }

});
//so here is our first promise
//promise is a eventual object  - that tell that I am doing this work and I don't have result right now, but when I'll get, I'll return it

orderFood
    .then((food) =>
        {
        console.log(food); //here I am represnting the fucntion if resolve happen
    })
    .catch((error) =>{
        console.log(error); //here i am representing the function that eill execute when rejected

    })
    .finally(() => {
        console.log("order processed completely!");
    });

