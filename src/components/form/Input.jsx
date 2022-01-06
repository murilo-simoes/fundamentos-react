//CONTROLLED COMPONENT
import React, {useState} from 'react';
const Input = () => {
    const [nome, setNome] = useState('Pedro');
    return ( 
        <>
        <h1>{nome}</h1>
        <input type="text" value={nome} onChange={e => setNome(e.target.value)}></input>
        </>
     );
}
 
export default Input;