import React from 'react'
import Tooltip from "@mui/material/Tooltip";

import { House } from 'lucide-react';
import { User } from 'lucide-react';
import Nav from "../Components/Nav";
import SearchBar from "./SearchBar";



const Navbar = ({ setSearchQuery }) => {


  return (
    <>

     <nav className="navbar navbar-expand-lg navbar-light bg-light" dir="rtl">
  <div className="container-fluid">

    <a className="navbar-brand me-0" href="#">
      <img src="./image/logo.png" alt="" width={60} />
    </a>


    {/* دکمه همبرگری */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
    
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <SearchBar onSearch={setSearchQuery} />
      </ul>

      <Nav />

    </div>

  </div>
</nav>
      <hr />
    </>
  )
}

export default Navbar