import { createSlice,nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos : [{id:123,task : "demo",isDone : false}],
};

export const todoslice = createSlice({
    name : "todo",
    initialState,
    reducers : {
        addtodo : (state,action)=>{
            const newtodo ={
                id : nanoid(),
                task : action.payload,
                isDone :false,
            };
            state.todos.push(newtodo);
        },
        deletetodo : (state,action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload);
        },
        markasdone : (state , action)=>{
            state.todos = state.todos.map((todo)=>{
                todo.isDone = true;
            })
        }
    }
    
})

export const{addtodo,deletetodo,markasdone}= todoslice.actions;
export default todoslice.reducer;