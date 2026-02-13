import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {

    const{register, handleSubmit} = useForm()
    const[userData, setuserData] = useState({})
    const[isSubmitted, setisSubmitted] = useState(false)

    const submitHandler = (data) => {
        setuserData(data)
        setisSubmitted(true)
    }
    
  return (
    <div>
        <h1>FormDemo1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' placeholder='Enter name' {...register('name')} width={30}></input>
            </div>
            <div>
                <label>AGE</label>
                <input type='text' {...register('age')}></input>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
        {
            isSubmitted == true && <div>
                <h1>Form is Submitted</h1>
            </div>
        }
    </div>
  )
}


