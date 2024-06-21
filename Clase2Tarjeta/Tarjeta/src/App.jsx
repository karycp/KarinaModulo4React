import React from 'react'
import imagen from './assets/rick.jpg'
import '../src/tarjeta.css'

function App(){
  return(
    <>
      <div className='container'>
          <div className='tarjeta'>
            <h1 className='titulo' >Soy Un Ricky!!</h1>
            <img src={imagen} alt='Imagen de Ricky'></img>
            <h1 className='titulo' >Aca va la descripción del Ricky!</h1>
          </div>
      </div>
    </>
  );
}

export default App