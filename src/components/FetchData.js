import React from 'react'
import { useState, useEffect} from 'react'
import { json } from 'react-router-dom'
const FetchData = () => {

    const [countries, setCountries] = useState([])

    useEffect(() =>{
        fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((json) => {console.log(json); setCountries(json)})
        .catch(err =>{
            console.log(err)
        })

    }, [])

  return (
    <div className='d-none'></div>
  )
}

export default FetchData