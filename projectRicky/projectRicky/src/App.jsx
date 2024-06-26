import React, { useEffect, useState } from 'react'
import '../src/tarjeta.css'
import Title from  '../src/Components/Titulo'
import Imagen from '../src/Components/Imagen'
import Description from '../src/Components/Descripcion'

function App(){
  const [name, setName] = useState(" ");
  const [image, setImage] = useState(" ");
  const [gender, setGender]= useState(" ");
  const [status, setStatus] =useState(" ");

  const rickAndMortyCharacterId = 2;
  console.log(name);
  
  useEffect( ()=>{
    fetch("https://rickandmortyapi.com/api/character/" + rickAndMortyCharacterId)
    .then ((response)=> response.json()) 
    .then ((results) => { {/*esta variable results solo exixte en esta línea*/}
      setImage(results.image)
      setName(results.name)
      setGender(results.gender)
      setStatus(results.status)
    })
        
  }, []
  );
  return(
  
      <div className='container'>
        <div className='tarjeta'>
          <div className='titulo'>
             <Title title = {name}/> 
          </div>
          <div>
            <Imagen image = {image} alte={'Personaje de Ricy'}/>
          </div>
          <div className='descripcion'>
            <Description gender = {gender} state={status}/>
          </div>
        </div>
      </div>
    
  );
}

export default App