import React, {useEffect, useState} from "react";
import Title from  '../Components/Titulo'
import Imagen from '../Components/Imagen'
import Description from '../Components/Descripcion'
import { useLocation, useNavigate } from "react-router-dom";

function HomePage(props){
  const [filterName, setfilterName]=useState();
  const [characterList, setCharacterList] = useState([]);
  const [filterGender, setfilterGender]=useState();
  const navigate= useNavigate();
  const urlData=useLocation();
  const queryParams= new URLSearchParams(urlData.search)
  const paginacion=queryParams.get('paginacion') || 1
  const name = queryParams.get('name') || ""
  const gender =queryParams.get('gender') || ""
  console.log(gender)
  useEffect( ()=>{
    fetch(`https://rickandmortyapi.com/api/character/?page=${paginacion}&name=${name}&gender=${gender}`)
    .then ((response)=> response.json()) 
    .then ((data) =>
      setCharacterList(data.results)
      
    )
      }, [paginacion, name, gender] )
    const sendParams= (e)=>{
      e.preventDefault()
      navigate(`/personajes?name=${filterName}&gender=${filterGender}`) 
      
    }  
    console.log(filterGender)
    return(
      
        <>
          <div>
            <h1 className="h1">Bienvenido!! Acá encuentra los Personajes de RICK And MORTY</h1>
          </div>
          <form className='form' onSubmit={sendParams}>
          
            <input className='input' onChange={(e)=>{setfilterName(e.target.value)}}  type="text" name='nombre' placeholder='Search Character Name'/>
            <select className='select' placeholder='Select Genre' onChange={(e)=>{setfilterGender(e.target.value)}}>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="genderless">genderless</option>
              <option value="unknown">unknown</option>
            </select>
            <button className='btnFiltro' type='submit' >BUSCAR</button>
          
        </form>
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