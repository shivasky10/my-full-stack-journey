


function rollDice(){
    let dice= Math.floor(Math.random()*6 )+1;
    console.log(dice);
}

rollDice();



function multi(num){
    for(let i=num;i<=num*10;i+=num){
        console.log(i);
    }
}

multi(5);



// aaaaaaaaaaaaaaaaaa


function oddOrEvenFactory(request) {
    if (request === "odd") {
        return function(n) {
            console.log(!(n % 2 === 0));
        }
    } else if (request === "even") {
        return function(n) {
            console.log(n % 2 === 0);
        }
    } else {
        console.log("Invalid request");
    }
}

let request = "odd"; // or "even"
let check = oddOrEvenFactory(request);
check(10);



// ----------------------------------------------

// methods example
// functions inside an object are called methods 

const calculator={
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    }
};

console.log(calculator.add(5,4));




let str = "abcdabcdefgggh";

function removeDuplicates(str) {
    let ans = "";
    for (let char of str) {
        if (!ans.includes(char)) {
            ans += char;
        }
    }
    return ans;
}

console.log(removeDuplicates(str));



// Qs3. Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"]
// output : "United States of America"


// let country=["india","china","russia","USA"]

// function largest(country){
//     let idx=0;
//     for(let i=0;i< country.length;i++){
//         let ansidx=country[idx].length;
//         let chars= country[i].length;
//          if(chars>ansidx){
//             ansidx=i;
//          }
//     }

//     return country[ansidx];
// }

// largest(country);



// Qs4. Write a JavaScript function to count the number of vowels in a String argument.


let name ="shivakumaryadav"

function vowels(name){

    let count=0;
    for(let i=0;i<name.length;i++){
        if(name[i]=="a"||name[i]=="e"||name[i]=="o"||name[i]=="i"||name[i]=="u")
            {
            count++;
            }
    }
    return count;
}

console.log(vowels(name));



// Write a JavaScript function to generate a random number within a range (start,
//     end).


let start=10;

let end=50;

function range(start,end){
    let diff= end-start;
    return Math.floor(Math.random()* diff) +start;
   
}

console.log(range(start,end));


