import { useEffect, useState } from "react";

export default function Joker(){
    let URL = "https://official-joke-api.appspot.com/jokes/random"

    let[Joke,setJoke]=useState("");

    let GenerateJoke = async ()=>{
        let response = await fetch(URL);
        let responsejson = await response.json();
        console.log(responsejson);
        setJoke({setup :responsejson.setup, punchline:responsejson.punchline})
    }

    useEffect(()=>{
        async function firstjoke(){
        let response = await fetch(URL);
        let responsejson = await response.json();
        console.log(responsejson);
        setJoke({setup :responsejson.setup, punchline:responsejson.punchline})
        }
        firstjoke()
    },[])

    return(
        <div>
        <h3>Jokes</h3>
        <h4>{Joke.setup}</h4>
        <h4>{Joke.punchline}</h4>
        <button onClick={GenerateJoke}>Generate Joke</button>
        </div>
    )
}