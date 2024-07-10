import {Link} from 'react-router-dom';
const Bloglist = (props) => {
    // {blogs,title,setblogs}
    const blogs=props.blogs;
    const title=props.title;
    // const handledelete = (id)=>{
    //     const newblogs=blogs.filter((blog)=>(blog.id!==id));
    //     setblogs(newblogs);
    // }

    return (  
        <div className="bloglist">
            <h2>{title}</h2>
            <br></br><br></br>
  { blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
             <h2>{blog.title}</h2>
             <p>{blog.author}</p>
             
             </Link>
             <br></br>
             {/* <button onClick={()=>(handledelete(blog.id))}>delete</button>  */}
            </div>
        ))}
       
               
        </div>
    );
}
 
export default Bloglist;