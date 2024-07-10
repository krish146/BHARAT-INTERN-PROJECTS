import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
// import { useState } from "react";

const Blogdetails = () => {
   const history=useHistory();
    const {id} = useParams();
    const {data:blog,pending,error}=useFetch("http://localhost:8000/blogs/"+id);
    console.log(blog,pending,error);

    const handleClick=()=>{
        fetch('http://localhost:8000/blogs/'+ id,
        { method:'DELETE'}).then(()=>{history.push('/');})
     }

    return (
        <div className="Class-of-blog">
       
            { pending && <div>Trying to Fetch blog for you!! Sit Tight!</div>}
            {error && <div>Not able to show blog right now</div>}
           {blog && 
           <article>
                    <div className="headblock">
                        <h2>{blog.title}</h2>
                        <div>~{blog.author}</div>
                    </div>
                    <p>{blog.body}</p>
           </article>}
           <button className='delete' onClick={handleClick} >Delete</button>
    </div>
     );
}
 
export default Blogdetails;