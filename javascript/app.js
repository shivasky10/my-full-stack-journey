let size="L"

if(size==="XL"){
    console.log("price is 250");
}
else if(size==="L"){
    console.log("price is 200");
}
else if(size==="M"){
    console.log("price is 100");
}
else if(size==="S"){
    console.log("price is 50");
}


let str="apple";

if(str[0]==="a"&&str.length>3){
    console.log("string is Good");

}else{
    console.log("string is not good")
    
}


// example for switch statemnets

let color="green"

switch(color){
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("wait");
        break;
    case "green":
        console.log("go");
        break;
    default:
        console.log("light is broken");
}


// // // practise quetions part2

// let num="20";

// if(num%10===0){
//     console.log("good");
// }else{
//     console.log("bad");
// }


// let name1 = prompt("enter name :");
// let age= prompt("enter age :")

// alert(`${name1} is ${age} years old`);



// prcatice questions part 3


let msg="   help   "
console.log(msg.trim().toUpperCase());


let months=["january","july","march","august"];

console.log(months.shift());


// splice exmaple


let cars=["toyato","bmw","tata","kia"];

cars.slice


// loops part4

// example for odd number for loop

for (i=1;1<=15;i+2){
    console.log(i);
}