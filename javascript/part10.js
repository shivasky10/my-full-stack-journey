// let btn = document.querySelector("button");

// btn.addEventListener("click",hello);
// btn.addEventListener('dblclick', function(){
//     console.log("double clicked");
// })


// function hello(){
//     console.log("hello haiii");
// }


// let pr = document.querySelector("p");

// pr.addEventListener("click",function(){
//     console.log("para clicked")
// });

// let box = document.querySelector(".box");

// box.addEventListener("mouseenter",function(){
//     console.log("mouse entered box")
// });

let inp =document.querySelector("input");

inp.addEventListener("keydown", function(event){
    console.log("key is :", event.code);
    if (event.code=="ArrowUp"){
        console.log("jumps");
    }else if ( event.code = "ArrowDown"){
        console.log("stops");
    }else if ( event.code = "ArrowLeft"){
        console.log("backward");
    }else if ( event.code = "ArrowRight"){
        console.log("forward");
    }
        
})



let form =document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();

    let user= document.querySelector("#user");
    let pass= document.querySelector("#pass");

    console.log(user.value);
    console.log(pass.value);

    alert(`${user.value} and ${pass.value}`);

})




let input = document.querySelector("#text");
let p =document.querySelector("p");
input.addEventListener("input", function(){
    console.log(this.value);
    p.innerText = this.value;
})