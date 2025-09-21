import { useState } from "react"
import { useFormik } from 'formik';

const validate = values => {
   const errors = {};
   if (!values.userName) {
     errors.userName = 'Username is Required';
   } 
 
   return errors;
 };

export default function CommentForm({addNewComment}){
    // let [formData,setFormData] = useState({
    //     userName:"",
    //     remarks:"",
    //     rating:5
    // })
    const formik = useFormik({
     initialValues: {
       userName: '',
       remarks: '',
       rating:5,
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });

    // let handleInputChange = ((event)=>{
    //     setFormData((currData)=>{
    //         return{...currData,[event.target.name]:event.target.value}
    //     })
    // })

    // let handleSubmit = ( event)=>{
    //     console.log(formData);
    //     addNewComment(formData);
    //     event.preventDefault();
    //     setFormData({
    //     userName:"",
    //     remarks:"",
    //     rating:5
    // })
    // }
    

    return (
        <div>
            <h3>Give a comment</h3>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username</label>
                <input id="username" type="username" name ="userName"placeholder="enter username" value={formik.values.userName } onChange={formik.handleChange}></input>
                {formik.errors.userName? <p style={{color:"red"}}>{formik.errors.userName}</p> : null}

                <br></br><br></br>
                <label htmlFor="remarks">Comment</label>
                <textarea  id="remarks"name="remarks" value={formik.values.remarks} placeholder="add few remarks" onChange={formik.handleChange}> Give a Remark</textarea>
                {formik.errors.remarks? <p style={{color:"red"}}>{formik.errors.remarks}</p> : null}
                <br></br><br></br>
                <label htmlFor="rating">Rating</label>
                <input id="rating" type="number" name="rating" value={formik.values.rating} placeholder="rating" min={1} max={5} onChange={formik.handleChange}></input>
                {formik.errors.rating? <p>{formik.errors.rating}</p> : null}
                <br></br><br></br>
                <button type="submit">Add comment</button>
            </form>
        </div>
    )
}