import React from 'react'
import Birthday from './Components/BirthdayCard'
import Animate from './Components/Animate'
import Form from './Components/Form'
import Gallery from './Components/Gallery'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BirthdayCard from './Components/BirthdayCard'
import Card from './Components/Card'

const App = () => {
  return (
    <>
        <BrowserRouter>
          
        <Routes>
         <Route path='/'element={<BirthdayCard/>}/> 
        <Route path="/form" element={<Form />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/card" element={<Card />} />

      </Routes>
        
        </BrowserRouter>

    </>
  )
}

export default App