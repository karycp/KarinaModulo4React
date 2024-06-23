import React from "react";


function Imagen(props){

    return (

        <img className="img" src = {props.image} alt="Personaje de Ricky" />
    );
}

export default Imagen;