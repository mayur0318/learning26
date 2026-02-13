import React, { useState } from 'react'

export const InputDemo2 = () => {
    const[country, setcountry]= useState('')
    const[state, setstate]= useState('')

    
    
        const stateData = [
        {
            "country": "India",
            "code": "india",
            "states": [
            "Gujarat",
            "Maharashtra",
            "Rajasthan",
            "Karnataka",
            "Tamil Nadu",
            "Uttar Pradesh",
            "Madhya Pradesh",
            "Punjab",
            "Haryana",
            "West Bengal"
            ]
        },
        {
            "country": "USA",
            "code": "usa",
            "states": [
            "California",
            "Texas",
            "Florida",
            "New York",
            "Illinois",
            "Pennsylvania",
            "Ohio",
            "Georgia",
            "North Carolina",
            "Michigan"
            ]
        },
        {
            "country": "Australia",
            "code": "australia",
            "states": [
            "New South Wales",
            "Victoria",
            "Queensland",
            "Western Australia",
            "South Australia",
            "Tasmania",
            "Australian Capital Territory",
            "Northern Territory"
            ]
        }
        ]

    
    const selectedCountry = stateData.find(
        (item) => item.code === country
        );

    
    const countryHandler = (event)=>{
        // console.log("Event is...", event.target.value)
        setcountry(event.target.value)
        setstate('')
        // console.log('Country is ->', country);
    }

    const stateHandler = (event) => {
        setstate(event.target.value)
    }



  return (
    <div>
        <h1>Dependent Dropdown</h1>
        <div>
            <label>Country</label>
            <select value={country} onChange={countryHandler}>
                <option value="">Select Country</option>
                <option value='india'>INDIA</option>
                <option value='usa'>USA</option>
                <option value='australia'>AUSTRALIA</option>
            </select>
        </div>
        <div>
            <label>State</label>
            <select  value={state}onChange={stateHandler}>
                <option value= ''>Select State</option>
                {
                    selectedCountry &&
                    selectedCountry.states.map((stateName) => (
                    <option key={stateName} value={stateName}>
                        {stateName}
                    </option>
                    ))
                }
            </select>
        </div>
    </div>
  )
}
