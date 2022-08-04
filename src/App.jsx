import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header'


function App() {

    

  return (
   
   <div> 
      <Header countryName='colombia'/>
      <Header countryName='peru'/>
      <Header countryName='uruguay'/>
      <Header countryName='paraguay'/>
      <Header countryName='venezuela'/>
      <Header countryName='mexico'/>
    </div>
    

  )
}

export default App
