import React from 'react';

const Parametro = (props) => {
    // props é somente leitura
    return ( 
        <>
            <h3>{props.titulo}</h3>
            <h4>{props.subtitulo}</h4>
        </>
     );
}
 
export default Parametro;                           