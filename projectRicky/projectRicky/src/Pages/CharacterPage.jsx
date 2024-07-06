import React, {useEffect, useState} from "react";
import Title from  '../Components/Titulo'
import Imagen from '../Components/Imagen'
import Description from '../Components/Descripcion'

function HomePage(props){
    const [characterList, setCharacterList] = useState([]);
  const [paginacion, setPaginacion] = useState(1);

  useEffect( ()=>{
    fetch(`https://rickandmortyapi.com/api/character/?page=${paginacion}`)
    .then ((response)=> response.json()) 
    .then ((data) =>
      setCharacterList(data.results)
      
    )
      }, [paginacion] )

    return(
      
        <>
          <div>
            <h1 className="h1">Bienvenido!! Acá encuentra los Personajes de RICK And MORTY</h1>
          </div>
          <div className='container'>
                                  {
              characterList.length !== 0 && characterList.map((character)=>(
                <div className='tarjeta' key={character.name}>
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
          
          </div>
        
        <div className="containerBtn">
        <button className='btn' onClick={()=>setPaginacion(paginacion-1)} >PAGINA ANTERIOR</button>
        <button className='btn' onClick={()=>setPaginacion(paginacion+1)}>PÁGINA SIGUIENTE</button>    
        </div>
      </>
    
    );
}

export default HomePage;