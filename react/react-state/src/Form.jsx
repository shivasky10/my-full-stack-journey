import { useActionState, useState } from "react"

export default function Form(){

    let[formChange , setFormChange] = useState({
        fullName : "",
        userName : ""
    })

    let handleChange = (event)=>{
        // let fieldName = event.target.name
        // let formvalue = event.target.value
        setFormChange((currValue)=>{
            return{...currValue,[event.target.name]:event.target.value};
        })
    }
    return (
        <>
        <form>
            <label htmlFor="fullname">Full Name</label>
            <input placeholder="Enter your name" value={formChange.fullName} id="fullname" name="fullName" onChange={handleChange}></input>
            <br></br><label htmlFor="username">username</label>
            <input placeholder="Enter your name" value={formChange.userName} id="username" name="userName" onChange={handleChange}></input>
            <button>Submit</button>
        </form>
        </>
    )
}