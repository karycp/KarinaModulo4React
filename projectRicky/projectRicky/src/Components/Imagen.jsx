import React from "react";


function Imagen(props){

    return (

        <img className="img" src = {props.image} alt={props.alte} />
    );
}

export default Imagen;