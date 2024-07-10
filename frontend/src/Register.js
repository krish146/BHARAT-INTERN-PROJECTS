import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './index.css';
const Register = () => {
    const initialFormData = {
        name: '',
        age: '',
        email: '',
        mobile: '',
        gender: ''
      };
    
    const [formData, setFormData] = useState(initialFormData);

 
   const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
   const navigate=useNavigate()

  function handleSubmit(event){
    event.preventDefault();

     fetch('http://localhost:5000/register',{
       method:"POST",
       headers:{"Content-Type":"application/json"},
       body:JSON.stringify(formData)
     }).then(()=>{
        setFormData(initialFormData)
        navigate('/successfulRegistration')
     }).catch((err)=>{
        console.log("Not able to POST DATA",err);
     })

  }
             
  return (
    <div className='register'>
      
        <form onSubmit={(event)=>{handleSubmit(event)}}>
        <h2>Registration Form</h2><br>
        </br>
        <label htmlFor='name'>Full Name: </label>
        <input 
        type="text"
        id="name"
        value={formData.name}
        onChange={handleChange}
        /> 
        <br></br>
        <label htmlFor='age'>Age: </label>
        <input 
        type="number"
        id="age"
        value={formData.age}
        onChange={handleChange}
        />
 <br></br>
        <label htmlFor='email'>Email: </label>
        <input 
        type="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
        />
<br>
</br>        
<label htmlFor='mobile_number'>Mobile No:</label>
        <input 
        type="tel"
        id="mobile"
        pattern="[0-9]{10}"
        value={formData.mobile}
        onChange={handleChange}
        />

<br></br>
<div>
<label>Gender: </label>
        <input 
        type="radio"
        id="gender"
        name="male"
        value="male"
        checked={formData.gender === 'male'}
        onChange={handleChange}></input>
        <label htmlFor='male'>Male </label>

        <input 
        type="radio"
        id="gender"
        name="female"
        value="female"
        checked={formData.gender === 'female'}
        onChange={handleChange}></input>
        <label htmlFor='female'>Female </label>
<br></br></div><br></br>
        <button type="submit"><b>Register</b></button>

        </form>
    </div>
  )
}

export default Register
