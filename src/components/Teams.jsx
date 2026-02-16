import React from 'react'
import { Link } from 'react-router-dom'

const iplTeams = [
    { name: "RCB", logo: "/src/assets/rcb.jpg" },
    { name: "MI", logo: "/src/assets/mi.jpg" },
    { name: "CSK", logo: "/src/assets/csk.jpg" },
    { name: "RR", logo: "/src/assets/rr.jpg" },
    { name: "SRH", logo: "/src/assets/srh.jpg" },
    { name: "GT", logo: "/src/assets/gt.jpg" },
    { name: "DC", logo: "/src/assets/dc.jpg" },
    { name: "LSG", logo: "/src/assets/lsg.jpg" },
    { name: "KKR", logo: "/src/assets/kkr.jpg" },
    { name: "PBKS", logo: "/src/assets/pbks.jpg" },
]
export const Teams = () => {
    return (
        <div>
            <h1>IPL Teams</h1>
            {
                iplTeams.map((team) => {
                    return <li key={team.name}>
                        <Link to={`/teamdetails/${team.name}`}>
                            <img
                                src={team.logo}
                                alt={team.name}
                                width="80"
                            />
                            <p>{team.name}</p>
                        </Link>
                    </li>
                })
            }
        </div>
    )
}
