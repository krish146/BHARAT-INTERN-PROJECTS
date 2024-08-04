import React,{useContext,useState} from 'react'
import axios from 'axios'

const BASE_URL = "http://locahost:3001/api/v1"

const GlobalContext=React.createContext()
//    this above variable is used for usecontext or for providing using provider
export const Globalprovider = ({children})=>{
    const [income,setIncome]=useState([])
    const[expenses,setExpenses]=useState([])
    const [error,setError] = useState(null)

    const addIncome = async(income)=>{
        const response=await axios.post(`${BASE_URL}add-income`,income)
        .catch((err)=>{
            setError(err.response.data.msg)
        })
    }
   const hello="hello"
    return (
        <GlobalContext.Provider value={{addIncome}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return useContext(GlobalContext)
}