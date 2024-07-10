import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const [title,settitle]=useState('fghdf');
    const [body,setbody]=useState('');
    const [author,setauthor]=useState('mario');

const[pending,ispending]=useState(false);
const history=useHistory();

      const handleSubmit = (e) => { 
      e.preventDefault();
      const blog = { title, body, author };
      // console.log(blog);
  ispending(true);
      fetch('http://localhost:8000/blogs/',{
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      alert('submitted!!');
      ispending(false);history.push('/');
    })
  }
    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label> Blog title:</label>
                <input
                type="text"
                required
            //    value={title} for default values 
               onChange={(event)=>settitle(event.target.value)}
                />
               <label>Blog body: </label>
              <textarea required value={body}  onChange={(event)=>setbody(event.target.value)}></textarea>
               
               <label>Blog author: </label>

               <input type="text" value={author}  onChange={(event)=>setauthor(event.target.value)}></input>
              {!pending ? <button >Add it!!</button> : <button disabled>Adding...</button>}
              
            </form>
            
        </div>
     );
}
 
export default Create;