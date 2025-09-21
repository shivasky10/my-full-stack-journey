import { useState } from "react"
import "./Comment.css"
import CommentForm from "./CommentForm";

export default function Comment(){
    let [comments ,setComments] = useState([{
        userName : "shiva",
        remarks : "good one ",
        rating : 4
    }])

    let addNewComment = (Comment)=>{
        setComments((currData)=>[...currData,Comment]);
    }
    return(
        <div>
            <h4>Comments</h4>
            {comments.map((comment,idx)=>{
                return(
                <div className="comment" key={idx}>
                <span>{comment.userName}</span>&nbsp;
                <span>: {comment.remarks}</span>
                <p>{comment.rating}</p>
            </div>)
            })}
            
            <hr></hr>
            <CommentForm addNewComment={addNewComment}/>
        </div>
    )
}