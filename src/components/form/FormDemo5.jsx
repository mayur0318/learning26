import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo5 = () => {
    const{register, handleSubmit, formState:{errors}, watch} = useForm({mode:onchange})
    const passwordValue = watch("password", "");
    const [isFocused, setIsFocused] = useState(false);

    const hasUpperCase = /[A-Z]/.test(passwordValue);
    const hasNumber = /[0-9]/.test(passwordValue);
    const hasMinLength = passwordValue.length >= 8;

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
        emailValidator:{
          required:{
            value: true,
            message: 'email is required*'
          }
        },
        dobValidator:{
          required:{
            value:true,
            message:'dob is required*'
          }
        },
        contactValidator:{
          required:{
            value:true,
            message:'contact is required*'
          }
        },
        passwordValidator:{
          required:{
            value:true,
            message:'password is required*'
          },
           validate:{
              hasUpperCase:(value)=>
                /[A-Z]/.test(value) || "At least 1 capital letter required",
              hasNumber:(value)=>
                /[0-9]/.test(value) || "At least 1 number required",
              minLength:(value)=>
                value.length >= 8 || "Minimum 8 characters required"
            }
        }
      }
    const submitHandler = (data)=>{

    }
  return (
    <div>
        <h1>Form</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
             <div>
                <label>Name:</label>
                <input type="text" placeholder='enter your name' {...register('name', validationSchema.nameValidator)}></input>
                <p style={{color:"red"}}>{errors.name?.message}</p>
                {/*optional chaining , it only read */}
            </div>
            <div>
              <label>Date of Birth</label>
              <input type="date" {...register('dob',validationSchema.dobValidator)}></input>
              <p style={{color:"red"}}>{errors.dob?.message}</p>
            </div>
             <div>
                <label>Age:</label>
                <input type="text" {...register('age',validationSchema.ageValidator)}></input>
                <p style={{color:"red"}}>{errors.age?.message}</p>
            </div>
            <div>
              <label>Contact No.:</label>
              <input type='tel' {...register('contact', validationSchema.contactValidator)}></input>
              <p style={{color:"red"}}>{errors.contact?.message}</p>
              
            </div>
            <div>
              <label>Email:</label>
              <input type='text' {...register('email', validationSchema.emailValidator)}></input>
              <p style={{color:"red"}}>{errors.email?.message}</p>
              
            </div>
            <div>
              <label>Password:</label>
              <input 
                type='password'
                onFocus={() => setIsFocused(true)}
                {...register('password', validationSchema.passwordValidator)}
              />

              {isFocused && (
                <div style={{fontSize:"14px"}}>

                  <p style={{
                    color: passwordValue.length === 0 
                      ? "black" 
                      : hasMinLength ? "green" : "red"
                  }}>
                    Minimum 8 characters
                  </p>

                  <p style={{
                    color: passwordValue.length === 0 
                      ? "black" 
                      : hasUpperCase ? "green" : "red"
                  }}>
                    At least 1 capital letter
                  </p>

                  <p style={{
                    color: passwordValue.length === 0 
                      ? "black" 
                      : hasNumber ? "green" : "red"
                  }}>
                    At least 1 number
                  </p>

                </div>
              )}

              {errors.password && (
                <p style={{color:"red"}}>{errors.password?.message}</p>
              )}
            </div>

            <div>
              <input type='submit'></input>
            </div>
        </form> 
    </div>
  )
}
