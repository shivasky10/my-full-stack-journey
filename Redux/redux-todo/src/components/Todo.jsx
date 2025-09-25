import { useSelector } from "react-redux"
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deletetodo } from "../features/todo/todoslice";

export default function Todo(){

    const todos = useSelector((state)=>state.todos);
    console.log(todos);
    let dispatch = useDispatch();

    const clickhandler = (id)=>{
        console.log("clicked",id);
        dispatch(deletetodo(id));
    }
    return(
        <>
        <AddForm/>
        <h2>Todos</h2>
        <ul>
            {todos.map((todo)=>(
                <li key={todo.id}>{todo.task}
                <button onClick={()=>clickhandler(todo.id)}>Delete</button></li>
            ))}
        </ul>
        </>
    )
}