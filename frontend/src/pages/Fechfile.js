import React, { useState } from 'react'

const Fechfile = () => {
  const[form,setForm]=useState({
    username:"",
    email:"",
    password:"",
})
    const [error,setError]=useState({})
const validation=()=>{
const newError=({})
if(!form.username)newError.username="invalid username";
if(!form.email)newError.email="invalid email";
else if(!/\S+@\S+\.\S/.test(form.email))newError.email="invalid mail";
if(!form.password)newError.password="invalid password";
else{
    if(form.password.length<6)newError.password="must be 6 charcter";
    if(!/[a-z]/.test(form.password))newError.password="must in lower case";
    if(!/[A-Z]/.test(form.password))newError.password="must in upper case";
    if(!/[!@#$%^&*]/.test(form.password))newError.password="must in special charcter";
}
return newError;
}

const handlechange=(e)=>{
const{name,value}=e.target;
setForm({
    ...form,
    [name]:value,
})
}

const handleSubmit=(e)=>{
    e.preventDefault();
    const validationerror=validation();
    if(Object.keys(validationerror).length===0)
    {
        console.log("form valid",form)
        window.location.href='/menu'

        setForm({
            username:"",
            email:"",
            password:"",
        })
        setError({})
    }
    else{
        setError(validation());
    }
   
    
}

  return (
    <div>
       <form onSubmit={handleSubmit}>
        <h1>form validation</h1>
        
        <label >username</label>
        <input value={form.username} name='username' type='text' onChange={handlechange}/>{error.username &&<p>{error.username}</p>}
        
        <label >email</label>
            <input value={form.email} type='email' name='email' onChange={handlechange}/>{error.email &&<p>{error.email}</p>}
            
            <label  >password</label>
            <input value={form.password} type='password' name='password' onChange={handlechange}/>{error.password &&<p>{error.password}</p>}
            <button>sumbit</button>
    </form>
    </div>
  )
}

export default Fechfile
