import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function Todolist(){
    let [todos , setTodos]=useState([ {task :"sample task",id : uuidv4()}]);
    let[newtodo , setNewTodo] = useState("");


    let addnewTask=()=>{
        setTodos( (preValue)=>{return [...todos, {task : newtodo , id : uuidv4()}]});
        setNewTodo("");
    }

    let updateTodoValue = (event)=>{
        setNewTodo(event.target.value);

    }

    let deleteTask = (id)=>{
        setTodos((prevtodos)=> todos.filter((prevtodos)=>prevtodos.id != id));
        
    }

    let uppercase =()=>{
        setTodos((prevtodo)=>prevtodo.map((todo)=>{ 
            return {
                ...todo , task: todo.task.toUpperCase()
            }
        }));
    }

    let updateTaskOne =(id)=>{
        setTodos((prevtodo)=>prevtodo.map((todo)=>{ 
            if(todo.id==id){
                 return {
                ...todo , task: todo.task.toUpperCase()
            }
            }else{
                return todo;
            }
           
        }));
    }

    return(
        <div>
            <input placeholder="Enter task " value={newtodo} onChange={updateTodoValue}></input>
            <br></br>
            <button onClick={addnewTask}> Add task</button>
            <br></br><br></br><hr></hr>
            <h3>Tasks Todo</h3>
            <ul>
                {
                    todos.map((todo)=>(<li key={todo.id}>
                        <span>{todo.task}</span>
                             <button onClick={()=>deleteTask(todo.id)}>Delete</button>
                            <button onClick={()=>updateTaskOne(todo.id)}>Update one</button>

                            
                        </li>))
                }
            </ul>
            <button onClick={uppercase}>UPPERCASE ALL</button>
        </div>
        
    )
}