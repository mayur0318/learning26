import React, { useState } from 'react'

export const InputDemo1 = () => {
    const[name, setName] = useState("");
    const[age, setAge] = useState("");
    const[gender, setGender] = useState("");
    const[country, setCountry] = useState("");
    const[isSubmitted, setisSubmitted] = useState(false);

    const nameHandler = (e) => {
        setName(e.target.value)
    } 
    const ageHandler = (e) => {
        setAge(e.target.value)
    }
    const genderHandler = (e) => {
        setGender(e.target.value)
    }
    const countryHandler = (e) => {
        setCountry(e.target.value)
    }

    const submitHandler = (e) => {
        setisSubmitted(true)
    }

  return (
    <div>
        <div>
            <h1>InputDemo1</h1>
            <label>NAME</label>
            <input type="text" onChange={(e)=>nameHandler(e)} />
            
        </div>
        <div>
            <label>AGE</label>
            <input type="text" onChange={(e)=>ageHandler(e)} />
           
        </div>
        <div>
            <label>GENDER</label><br></br>
            MALE : <input type='radio' name='radio' value="male"  onChange={(e)=>{genderHandler(e)}}></input>
            <br></br>
            FEMALE : <input type='radio' name='radio' value="female"  onChange={(e)=>{genderHandler(e)}}></input>
            
            
        </div>
        <div>
            <label>COUNTRY</label>
            <select onChange={(e)=>{countryHandler(e)}}>
                <option value="india">INDIA</option>
                <option value="usa">USA</option>
                <option value="china">CHINA</option>
            </select>
           
        </div>
        <button type="submit" onClick={(e) => {submitHandler(e)}}>Submit</button>

        {
            isSubmitted == true && <div>
                <h1>OUTPUT</h1>
                <h1>Name: {name}</h1>
                <h1>Age: {age}</h1>
                <h1>Gender: {gender}</h1>
                <h1>Counrty: {country}</h1>
            </div>
            
        }

    </div>
  )
}
