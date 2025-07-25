

// let sum=(a,b)=>{
//     return a+b;
// }

// sum(1,2);



// // setTimeout(()=>{
// //     console.log("hello haii");
// // },3000);

// // setTimeout();


// let stop = setInterval(()=>{
//     console.log("interval");
// },2000);

// setInterval();

let num = (n)=> {
    return n*n;
};


let id1 = setInterval (()=>{
    console.log("hello world");
},2000);

setTimeout(()=>{
    clearInterval(id1);
    console.log("stopped");
},10000);



// for each example


let arr=["shiva","sai","ram"];

function some(x){
    console.log(x);
}

arr.forEach(some);



let array=[1,2,3,5,6,8,10];

let even = array.filter((element)=>{
    return element %2==0;
})
 console.log(even);
