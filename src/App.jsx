import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import About from "./pages/About"
import Home from "./pages/home"
import Vans from "./pages/Vans"

import Nav from "./components/nav"
import Footer from "./components/Footer"


function App() {
    return (
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/vans" element={<Vans />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    )
  }

export default App
