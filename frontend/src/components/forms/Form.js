import React,{useState,useContext} from 'react'
import DatePicker from 'react-datepicker'
import { useGlobalContext } from '../../context/globalContext'
import styled from 'styled-components'

const Form = () => {

    const {addIncome} = useGlobalContext();


    const [inputState,setInputState]=useState({
        title:'',
        amount:'',
        date:'',
        category:'',
        description:''
    })

    const {title,amount,date,category,description}=inputState;

    const handleInput = (name,event)=>{
  setInputState({...inputState,[name]:event.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        addIncome(inputState)
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })
    }

    
  return (
    <FormStyled onSubmit={(e)=>{handleSubmit(e)}}>
         <div className="input-control">
                <input 
                    type="text" 
                    value={title}
                    name="title"
                    placeholder="Salary Title"
                    onChange={(e) => handleInput('title', e)}
                />
            </div>

            <div className="input-control">
                <input value={amount}  
                    type="text" 
                    name="amount"
                    placeholder="Salary Amount"
                    onChange={(e) => handleInput('amount', e)} 
                />
            </div>
            <div className="input-control">
                <DatePicker 
                    id='date'
                    placeholderText='Enter A Date'
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => {
                        setInputState({...inputState, date: date})
                    }}
                />
            </div> 
            <div className="selects input-control">
                <select required value={category} name="category" id="category"   onChange={(e) => handleInput('category', e)} >
                    <option value=""  disabled >Select Option</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investments">Investiments</option>
                    <option value="stocks">Stocks</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="bank">Bank Transfer</option>  
                    <option value="youtube">Youtube</option>  
                    <option value="other">Other</option>  
                </select>
            </div>
            <div className="submit-btn">
                <button>Add Income</button>
            </div>
    </FormStyled>
  )
}

const FormStyled = styled.form``;

export default Form
