import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Header = ({countryName})  => {

    const [country, setCountry] = useState()

    useEffect(() => {
        const URL = `https://restcountries.com/v2/name/${countryName}`
        axios.get(URL)
        .then(res => setCountry(res.data[0]))
        .catch()
    }, [])

    return (
      
        <div>
            <h1>Hi!</h1>
            <h2>Do you know {country?.name}?</h2>
            <p>The {country?.demonym} people are from the {country?.altSpellings[1]} wich has its capital in {country?.capital} and has about {country?.population} people </p>
            <p>they will speak you in "{country?.languages[0].nativeName}" Language </p>
            <img src={country?.flags.png} alt="" />
            <p>Do not forget the coin, you will need to change your money for "{country?.currencies[0].name}" and if you go to trip, remember it has {country?.timezones[0]} </p>
     
        </div>
        
  )
}

export default Header