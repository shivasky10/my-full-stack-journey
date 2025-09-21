import { useState } from "react"

export default function Form(){

    let[fullName,setFullName] = useState("Shiva");

    let handleChange = (event)=>{
        setFullName(event.target.value)
        // console.log(event.target)
    }
    return (
        <>
        <form>
            <label htmlFor="username">Full Name</label>
            <input placeholder="Enter your name" value={fullName} id="username" onChange={handleChange}></input>
            <button>Submit</button>
        </form>
        </>
    )
}