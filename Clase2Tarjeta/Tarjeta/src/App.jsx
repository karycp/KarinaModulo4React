import React from 'react'
import beth from './assets/BethSmith.jpg'
import Steve from './assets/SteveJobs.jpg'
import Bill from './assets/BillGates.jpg'
import '../src/tarjeta.css'
import Title from  '../src/Components/Titulo'
import Imagen from '../src/Components/Imagen'

import Description from '../src/Components/Descripcion'

function App(){
  return(
  
      <div className='container'>
        <div className='tarjeta'>
          <div className='titulo'>
             <Title title = {'Beth Smith'}/> 
          </div>
          <div>
            <Imagen image = {beth} alte={'Personaje de Ricy'}/>
          </div>
          <div className='descripcion'>
            <Description gender = {'Femenino'} state={'Viva'}/>
          </div>
        </div>

        <div className='tarjeta'>
          <div className='titulo'>
             <Title title = {'Steve Jobs'}/> 
          </div>
          <div>
            <Imagen image = {Steve} alte={'Steve Jobs'}/>
          </div>
          <div className='descripcion'>
            <Description gender = {'Masculino'} state={'Fallecido'}/>
          </div>
        </div>

        
        <div className='tarjeta'>
          <div className='titulo'>
             <Title title = {'Bill Gates'}/> 
          </div>
          <div>
            <Imagen image = {Bill} alte={'Bill G'}/>
          </div>
          <div className='descripcion'>
            <Description gender = {'Masculino'} state={'Vivo'}/>
          </div>
        </div>
     </div>
    
  );
}

export default App