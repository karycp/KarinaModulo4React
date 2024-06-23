import React from "react";

function Description(props){

    return(
        <div>
            <p>
                <b>Genero:</b> {props.gender}
            </p>
            <p>
                 <b>Estado:</b> {props.state}
            </p>
        </div>
    );
}

export default Description;