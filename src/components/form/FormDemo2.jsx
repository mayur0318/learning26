import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {
    const{register, handleSubmit} = useForm();
    const[userData, setuserData]= useState({});
    const[isSubmitted, setisSubmitted]= useState(false);

    const submitHandler = (data)=>{
        console.log("data->", data);
        
        setuserData(data)
        setisSubmitted(true)
    }
  return (
    <div>
        <h1>Form Demo 2</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name</label>
                <input type='text' {...register('name')}></input>
            </div>
            <div>
                <label>Age</label>
                <input type='text' {...register('age')}></input>
            </div>
            <div>
                <label>Gender</label> <br />
                Male:<input type='radio' value='male'{...register('gender')}></input>
                Female:<input type='radio' value='female' {...register('gender')}></input>
                Other:<input type='radio' value='other' {...register('gender')}></input>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
