import React from 'react'
import { useForm } from 'react-hook-form';

export const FormDemo4 = () => {
    const{register, handleSubmit, formState:{errors}} = useForm({mode:"all"});

    const validationSchema = {
        nameValidator:{   
            required:{
                value:true, 
                message:"name is required*"
            },
            maxLength:{
                value: 40,
                message:"max 40 char is allowed*"
            }

        },
        ageValidator:{   
            required:{
                value:true, 
                message:"age is required*"
            },
            min:{
                value:12,
                message:"min age should be 12*"
            },
            max:{
                value:60,
                message:"max age should be 60*"
            },
        },
        hobbiesValidator:{
            required:{
                value:true,
                message:"hobbies are required*"
            },
            validate:(params)=>{
                return params?.length>=2  || "min 2 hobbies are required*~"
            }
        }

    }
    const submitHandler = (data)=>{  
                         
    }

  return (
    <div>
        <h1>Form Validation</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name:</label>
                <input type="text" placeholder='enter your name' {...register('name', validationSchema.nameValidator)}></input>
                {errors.name?.message} {/*optional chaining , it only read */}
            </div>
            <div>
                <label>Age:</label>
                <input type="text" {...register('age',validationSchema.ageValidator)}></input>
                {errors.age?.message}
            </div>
            <div>
                <label>Hobies:</label> <br />
                <input type="checkbox" {...register('hobbie',validationSchema.hobbiesValidator)} value='travel'></input>Travel
                <input type="checkbox" {...register('hobbie',validationSchema.hobbiesValidator)} value='reading'></input>Reading
                <input type="checkbox" {...register('hobbie',validationSchema.hobbiesValidator)} value='playing'></input>Playing <br />
                {errors.hobbie?.message}
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
