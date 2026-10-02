import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Weather from './Components/Weather'
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from './Components/Footer';
import Login from './Components/Login';



const App = () => {

  const [searchQuery, setSearchQuery] = useState("");

  const [category, setCategory] = useState("general");


  return (

<>
    <BrowserRouter>

      <Navbar setSearchQuery={setSearchQuery} />


      <Routes>

        <Route  path="/" element={
            <Home searchQuery={searchQuery} category={category} setCategory={setCategory}  /> }
        />


        <Route path="/weather" element={<Weather />} />
        <Route path="/Login" element={<Login/>} />


      </Routes>


    <Footer/>
    </BrowserRouter>
    </>

  )
}

export default App;