let btn = document.querySelector("button");
btn.addEventListener("click", actionFnc);

function actionFnc(){
    let h1 = document.querySelector("h1");
    let randColor = getRandomColor();
    h1.style.color = randColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randColor;
    console.log("color updated");
}
function getRandomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;

}