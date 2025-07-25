// // to print odd numbers 
for (let i=1;i<=20;i=i+2){
    console.log(i);
}


// example for nested loop


for (let i=1;i<=5;i++){
    console.log(`outer loop ${i}`);
    for(let j=1;j<=5;j++){
        console.log(j);
    }
}


// example for while loop


let i=10;

while(i>=1){
    console.log(i);
    i--;
}


// guessing a fav movie example



// const favMovie="salaar";

// let guess= prompt("guess the movie");
// while((guess!=favMovie)&&(guess!="quit")){
//     guess=prompt("try again to guess");
// }

// if(guess==favMovie){
//     console.log("you guessed it right");
// }else{
//     console.log("you quit");
// }




// example for loops in arrays


let fruits=["apple","mango","banana"];

for(let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}


// example for nested arrays loops

let arr=[["shiva","sai","ram"],["haii","hello","namaste"]];


for(let i=0;i<arr.length;i++){
    for(j=0;j<arr[i].length;j++) {
        console.log(j,arr[i][j]);
    }
}


// example for (for-of) loop


let some=["haii","helllo","hi"];

for(indi of some){
    console.log(indi);
}


// parcatice qs part4

let arrx=[1,2,3,4,5,6,2,3,2];
let num=2;

for(let i=0;i<arrx.length-1;i++) {
    if(arrx[i]==num){
        arrx.splice(i,1);
    }
}
console.log(arrx);


let number=287152;
let count=0;

let copy=number;

while(copy>0){
    count++;
    copy=Math.floor(copy/10);
}
console.log(count);



let array=[12,13,11,14,25,1,6];
let greatest=0;

for(let i=0;i<array.length;i++){
    if(greatest<array[i]){
        greatest=array[i];
    }
}

console.log(greatest);