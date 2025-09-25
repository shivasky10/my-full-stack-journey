import { useState } from "react"
import { useDispatch } from "react-redux";
import { addtodo } from "../features/todo/todoslice";

export default function AddForm(){

    let [task,setTask ]= useState("");
    const dispatch = useDispatch();
    const submitHandler =(event)=>{
        event.preventDefault();
        console.log(task);
        dispatch(addtodo(task));
        setTask("");
    }
    return(
        <div>
            <form onSubmit={submitHandler
            }>
                <input type="text" onChange={(e)=>setTask(e.target.value)}></input>
                <button>Add task </button>
            </form>
        </div>
    )
}