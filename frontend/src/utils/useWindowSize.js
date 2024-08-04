import {useState,useEffect} from 'react'

const useWindowSize = () => { //custom hook
    const [size,setSize] = useState([1600,800]);

    useEffect(()=>{
      const updateSize=()=>{
        setSize([window.innerWidth,window.innerHeight])
      }

      window.addEventListener('resize',updateSize)
      return ()=>window.removeEventListener('resize',updateSize)
    },[])
  return {
    width:size[0],
    height:size[1]
  }
}

export default useWindowSize
