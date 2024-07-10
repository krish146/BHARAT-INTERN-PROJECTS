import {useState,useEffect} from "react";

const useFetch = (url) => {
    const [data,setdata]=useState(null);
    const [pending,setpending]=useState(true);
    const [error,seterror]=useState(null);


    useEffect(()=>{
        setTimeout(()=>{fetch(url)
            .then(res=>{
               if(!res.ok)
               {
                   throw Error(`Couldn't fetch the damn data from server`);
               }
               return res.json();})
           .then((data)=>{
               setpending(false);
               setdata(data);
               seterror(null);
           }).catch((err)=>{
               setpending(false);
               seterror(err.message);
           })},1000);
   
       },[url]);
      
    return {data,pending,error};
}
 
export default useFetch;