import React, {useEffect, useState} from "react";
import Title from  '../Components/Titulo'
import Episode from '../Components/Episode'



function Episodes(props){
    const [characterList, setCharacterList] = useState([]);
  const [paginacion, setPaginacion] = useState(1);

  useEffect( ()=>{
    fetch(`https://rickandmortyapi.com/api/episode?page=${paginacion}`)
    .then ((response)=> response.json()) 
    .then ((data) =>
      setCharacterList(data.results)
      
    )
      }, [paginacion] )

    return(
      
        <>
          <div>
            <h1 className="h1">Bienvenido!! Acá encuentra los Episodios de RICK And MORTY</h1>
          </div>
          <div className='container'>
                                 
            {
              characterList.length !== 0 && characterList.map((character)=>(
                <div className='tarjeta' key={character.name}>
                    <div className='titulo'>
                        <Title  title = {character.name}/> 
                    </div>
                    <div>
                        < Episode episode ={character.episode}/>
                    </div> 
                    <div className="h2">
                        < Episode episode ={character.air_date}/>
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

export default Episodes;