// import { useState,useEffect } from "react"
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
    // const func=()=>{fire('mario')}
    // const fire=(name)=>{console.log("hello"+name)}
//    const [name,setName]=useState('name');

//    const [blogs,setblogs]=useState(null);
//     const [pending,setpending]=useState(true);
//     const [error,seterror]=useState(null);
    // useEffect(()=>{
    // console.log('use effect ran');
    // },[blogs[0]]);
    
    // useEffect(()=>{
    //  fetch('http://localhost:8000/blogs')
    //  .then(res=>{
    //     {
    //         throw Error(`Couldn't fetch the damn data from server`);
    //     }
    //     return res.json();})
    // .then((data)=>{
    //     setpending(false);
    //     setblogs(data);
    //     seterror(null);
    // }).catch((err)=>{
    //     setpending(false);
    //     seterror(err.message);
    // })
    // },[]);
    
   const {data:blogs,pending,error}=useFetch("http://localhost:8000/blogs");
    console.log(blogs,pending,error);
   return (

         <div className="home">
        {error && <div>{error}</div>}
         {pending && <div>SIT TIGHT! WE ARE FETCHING DATA FOR YOU!!</div>}
         {blogs && <Bloglist blogs={blogs} title="All blogs"/>}
       {/* {blogs && <Bloglist blogs={blogs} title="ALL blogs" setblogs={setblogs}/>} */}
       {/* <Bloglist blogs={blogs.filter((blog)=>{return (blog.author==="krish3")})} title="Latest"/>
        */}
        {/* <button onClick={func}>clickme</button>
        <button onClick={(e)=>console.log(fire('react'),e.target)}>event object</button> */}
     {/* <p>{name}</p> */}
     {/* <button onClick={()=>{setName('krish')}}>click me</button> */}
    </div> );
}

export default Home;