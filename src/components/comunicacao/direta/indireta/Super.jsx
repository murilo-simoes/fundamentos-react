import React, {useState} from 'react';
import Sub from './Sub'

const Super = (props) => {

    const [texto, setTexto] = useState("Valor")
    const [num, setNum] = useState(0)

    function quandoClicar(valorGerado, texto){
        setNum(valorGerado)
        setTexto(texto)
    }
    return ( <div>
        <h4>{texto}: {num}</h4>
        <Sub onClicar={quandoClicar}sobrenome="Silva">Pedro</Sub>
    </div> 
    );
}
 
export default Super;