import React from 'react'
import { useParams } from 'react-router-dom'

export const TeamDetails = () => {
    const teamName = useParams().team
    return (
        <div>
            <h1>Playing....{teamName}</h1>
        </div>
    )
}
