import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'


export const PostApiDemo = () => {
    const{register, handleSubmit} = useForm();

    const submitHandler = async(data) =>{
        try{
        const res = await axios.post("https://node5.onrender.com/user/user/",data)
        console.log(res)
        console.log(res.data)
        }catch(err){
            console.log(err)
            alert("error while adding user")
        }
    }
  return (
    <div>
        <h1> FORM For Post API</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
        <div>
            <label>Name</label>
            <input type='text' placeholder='enter name' {...register('name')}></input>
        </div>
         <div>
            <label>Age</label>
            <input type='text' {...register('age')}></input>
        </div>
        <div>
            <label>Email:</label>
            <input type='text' {...register('email')}></input>
        </div>
        <div>
            <label>Password:</label>
            <input type='password' {...register('password')}></input>
        </div>
        <div>
            <label>isActive:</label>
            <input type='radio' value={true} {...register('isActive')}></input> True
            <input type='radio' value={false} {...register('isActive')}></input> False
        </div>
         <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
