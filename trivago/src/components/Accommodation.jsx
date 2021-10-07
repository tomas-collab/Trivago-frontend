
import React from "react"
import { useEffect,useState } from "react"
const Accommodation = ()=>{

    const [accommodation, setAccommodation] = useState([])

    useEffect(() => {
       fetchData()
    }, [])

    const fetchData = async()=>{
        const response = await fetch('http://localhost:3001/users',{
            headers:{"Content-Type": "application/json"},
            credentials:'include'
                     
                   
        })
        if(response.ok){
            const accom = await response.json()
            setAccommodation(accom)
        }

    }
    return(
        <ul>{accommodation.map(a=>
            <li>
               {a.name}
            </li>
        )}
        </ul>
    )
}

export default Accommodation