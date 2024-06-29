import React, { useEffect, useState } from 'react'
import '../src/tarjeta.css'
import Title from  '../src/Components/Titulo'
import Imagen from '../src/Components/Imagen'
import Description from '../src/Components/Descripcion'

function App(){
  const [characterList, setCharacterList] = useState([]);
  const [paginacion, setPaginacion] = useState(1);

  useEffect( ()=>{
    fetch(`https://rickandmortyapi.com/api/character/?page=${paginacion}`)
    .then ((response)=> response.json()) 
    .then ((data) =>
      setCharacterList(data.results)
      
    )
      }, [paginacion] )
  
  return (
        <div className='container'>
       <>
             
           {
            characterList.length !== 0 && characterList.map((character)=>(
              <div className='tarjeta'>
              <div className='titulo'>
                <Title  title = {character.name}/> 
              </div>
              <div>
                <Imagen  image = {character.image} alte={'Personaje de Ricy'}/>
              </div>
              <div className='descripcion'>
                <Description  gender = {character.gender} state={character.status}/>
              </div>
            </div>
            ))
            }
            <button className='btn' onClick={()=>setPaginacion(paginacion-1)} >PAGINA ANTERIOR</button>
            <button className='btn' onClick={()=>setPaginacion(paginacion+1)}>PÁGINA SIGUIENTE</button>
           
       </>
       </div>
 )  
}
export default App