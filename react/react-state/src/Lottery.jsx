import { useState } from "react"
import "./Lottery.css"
import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n,winningSum}){
    let [ticket,setTicket]=useState(genTicket(n));
    let isWinning = sum(ticket)=== winningSum;

    let buyTicket= ()=>{
        setTicket(genTicket(n));
    }
    return(
        <div>
            <h1>Lottery game !</h1>
            <Ticket ticket={ticket}/>
            <button onClick={buyTicket}>Buy new Ticket</button>
            <h3>{isWinning && "congrats You won"}</h3>
        </div>
    )
} 