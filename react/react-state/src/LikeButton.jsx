import { useState } from "react";



export default function LikeButtton(){
    let [isLiked , setIsLiked ] = useState(false);

    let istoggle = ()=>{
        setIsLiked(!isLiked);
    }

    let likestyle = { color : "red"}
    return(
        <div>
        
        <h1 onClick={istoggle}>
            { isLiked ? <i className ="fa-solid fa-heart" style={likestyle}></i> :  <i className="fa-regular fa-heart"></i>}
           </h1>
        </div>
    );
}