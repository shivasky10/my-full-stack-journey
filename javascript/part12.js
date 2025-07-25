// let res = '{"fact":"The average lifespan of an outdoor-only (feral and non-feral) is about 3 years; an indoor-only cat can live 16 years and longer. Some cats have been documented to have a longevity of 34 years.","length":192}'


// let validres = JSON.parse(res);
// console.log(validres);


// let stu = {
//     name : " shiva",
//     age : 20,
// };

// let url = 'https://catfact.ninja/fact';

// fetch(url).then((res)=>{
//     console.log(res);
//     return res.json();
// }).then((data)=>{
//         console.log(data.fact);
// })
// .catch((err)=>{
//     console.log(err);
// });

// let btn = document.querySelector("button");
// btn.addEventListener("click",async ()=>{
//     let data11 = await getfacts();

//     let para = document.querySelector("#abc");
//     para.innerText = data11;
// })

// async function getfacts(){
//    try { let resp = await axios.get(url);
//     return resp.data.fact;
//    } catch (e){
//     console.log(e);
//     return "no fact found";
//    }
// }


let url = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let data = await getimg();

    let img1 = document.querySelector("#abc");
    img1.setAttribute("src",data);
})

async function getimg(){
   try { let resp = await axios.get(url);
    return resp.data.message;
   } catch (e){
    console.log(e);
    return "not found";
   }
}