import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {
    const{register, handleSubmit}= useForm();
    const[userData, setuserData]= useState({});
    const[isSubmitted, setisSubmitted]= useState(false);

    const submitHandler = (data)=>{
        setuserData(data);
        setisSubmitted(true);
    }

  return (
    <div>
        <h1>Form Demo 3</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Email</label>
                <input type="email" {...register('email')}></input>
            </div>
            <div>
                <label>Contact</label>
                <input type="tel" {...register('contact')}></input>
            </div>
            <div>
                <label>Password</label>
                <input type="password" {...register('password')}></input>
            </div>
            <div>
                <input type='submit'></input>
            </div>
            
        </form>
    </div>
  )
}
