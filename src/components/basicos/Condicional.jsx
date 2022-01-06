import React from 'react';

const Condicional = (props) => {
    return ( <div>
        <h2>O número é {props.numero}</h2>
        {props.numero % 2 === 0 ? <span>Par</span> : <span>Impar</span>}
    
    </div> );
}
 
export default Condicional;