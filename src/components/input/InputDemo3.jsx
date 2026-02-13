import React, { useState } from 'react'

export const InputDemo3 = () => {
    const[name, setname]= useState('')
    const[age, setage]= useState('')
    const[email, setemail]= useState('')
    const[gender, setgender]= useState('')
    const [contact, setContact] = useState('')
    const[country, setcountry]= useState('')
    const[submit, setsubmit]= useState(false)


    const nameHandler = (event)=>{
        setname(event.target.value)
    }

    const ageHandler = (event)=>{
        setage(event.target.value)
    }

    const emailHandler = (event)=>{
        setemail(event.target.value)
    }

    const genderHandler =(event)=>{
        setgender(event.target.value)
    }

    const contactHandler =(event)=>{
        setContact(event.target.value)
    }

    const countryHandler =(event)=>{
        setcountry(event.target.value)
    }
    const submitHandler =(event)=>{
        setsubmit(true)
    }
    
  return (
    <div>
        <h1>InputDemo3</h1>
        <div>
            <label>NAME</label>
            <input type='text' value={name} onChange={nameHandler}></input>
        </div>
        <div>
            <label>AGE</label>
            <input type='text' value={age} onChange={ageHandler}></input>
        </div>
        <div>
            <label>EMAIL</label>
            <input type='text' value={email} onChange={emailHandler}></input>
        </div>

        <div>
            <label>GENDER</label> <br />
            MALE:<input type='radio' value= 'male' name='gender' onChange={genderHandler}></input>
            FEMALE:<input type='radio' value= 'female' name='gender' onChange={genderHandler}></input>
            OTHER:<input type='radio' value='other' name='gender' onChange={genderHandler}></input>
        </div>
        
        <div>
            <label>Contact No.:</label>
            <input type="tel" pattern="[0-9]{10}" maxLength="10" value={contact} onChange={contactHandler}></input>
        </div>
        <div>
            <label>COUNTRY</label>
            <select onChange={(e)=>{countryHandler(e)}}>
                <option value="india">INDIA</option>
                <option value="usa">USA</option>
                <option value="china">CHINA</option>
            </select>
           
        </div>
        <button type="submit" onClick={submitHandler}>Submit</button>

        {
            
            submit == true && <div>
                <h1>Output</h1>
                <h4>Name: {name}</h4>
                <h4>Age: {age}</h4>
                <h4>Email: {email}</h4>
                <h4>Gender: {gender}</h4>
                <h4>Contanct No.: {contact}</h4>
                <h4>Country: {country}</h4>
                
            </div>
        }
    </div>
       
  )
}
