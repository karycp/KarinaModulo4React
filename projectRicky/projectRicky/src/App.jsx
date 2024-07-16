import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './Pages/CharacterPage';
import NotFound from './Pages/NotFound';
import Home from './Pages/Home';
import Episodes from './Pages/InfEpisodios';

import '../src/tarjeta.css'


function App(){
  
  
  return (
    
     <Router>
      
        <nav >
          <ul className='ul'>
            <li className='li'>
              <Link className='link' to ='/'>Home</Link>
            </li>
            <li className='li'>
              <Link className='link'to ='/personajes'>Personajes</Link>
            </li>
            <li className='li'>
              <Link className='link'to ='/episodios'>Episodios</Link>
            </li>
          </ul>
        </nav>
        
    
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/personajes' element={<HomePage/>} />  
        <Route path='/episodios' element={<Episodes/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    
  </Router>
 );  
}
export default App