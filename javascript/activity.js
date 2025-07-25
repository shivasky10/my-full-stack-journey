let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let h1 = document.querySelector("h1");
    console.log("color updated");
    let randomcolor = getcolor();
    let div = document.querySelector("div");

    h1.innerText = randomcolor;

    div.style.backgroundColor = randomcolor;

})


function getcolor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red} , ${green},${blue})`;
    return color;
}