import { useState } from "react"

export default function CommentForm(){
    let [formData,setFormData] = useState({
        userName:"",
        remarks:"",
        rating:5
    })

    let handleInputChange = ((event)=>{
        setFormData((currData)=>{
            return{...currData,[event.target.name]:event.target.value}
        })
    })

    let handleSubmit = ( event)=>{
        console.log(formData);
        event.preventDefault();
        setFormData({
        userName:"",
        remarks:"",
        rating:5
    })
    }
    

    return (
        <div>
            <h3>Give a comment</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input id="username" type="username" name ="userName"placeholder="enter username" value={formData.userName } onChange={handleInputChange}></input>
                <br></br><br></br>
                <label htmlFor="remarks">Comment</label>
                <textarea  id="remarks"name="remarks" value={formData.remarks} placeholder="add few remarks" onChange={handleInputChange }> Give a Remark</textarea>
                <br></br><br></br>
                <label htmlFor="rating">Rating</label>
                <input id="rating" type="number" name="rating" value={formData.rating} placeholder="rating" min={1} max={5} onChange={handleInputChange}></input>
                <br></br><br></br>
                <button>Add comment</button>
            </form>
        </div>
    )
}