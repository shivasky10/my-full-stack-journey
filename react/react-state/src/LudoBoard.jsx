import { useState } from "react";

export default function LudoBoard(){
    let [moves,setMoves]=useState({blue : 0 , yellow : 0 , red : 0, green :0});

    let updateBlueMoves=()=>{
        console.log(moves.blue);
        setMoves((prevmoves)=>{ return {...prevmoves,blue :prevmoves.blue+1}});
    };
     let updateYellowMoves=()=>{
        console.log(moves.yellow);
        setMoves((prevmoves)=>{return{...moves,yellow :moves.yellow+1}});
    };

    return(
        <div>
            <p> Game Begins</p>
            <div>
                <p>Blue moves={moves.blue}</p>
                <button style={{backgroundColor : "Blue" }} onClick={updateBlueMoves}>+1</button>
                <p>Yellow moves={moves.yellow}</p>
                <button style={{backgroundColor : "yellow" ,color:"black"}} onClick={updateYellowMoves}>+1</button>
                <p>Red moves={moves.red}</p>
                <button style={{backgroundColor : "red" }}>+1</button>
                <p>Green moves={moves.green}</p>
                <button style={{backgroundColor : "green" }}>+1</button>
            </div>
        </div>
    );
} 