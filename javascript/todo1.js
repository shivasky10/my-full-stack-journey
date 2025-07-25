let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function(){
    let items = document.createElement("li");
    items.innerText = inp.value;
    ul.appendChild(items);

    let delbtn =document.createElement("button");
    delbtn.innerText="delete";
    items.appendChild(delbtn);
    inp.value ="";
})

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
       let parele = event.target.parentElement;
        parele.remove();
        console.log("deleted");
    }
    
});




// let delbtns = document.querySelectorAll(".del");

// for (delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         let par = this.parentElement;
//             par.remove();

//     });
// }
