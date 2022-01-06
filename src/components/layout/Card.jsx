import React from 'react';
import './Card.css'
const Card = (props) => {
    return ( 
        <div className='Card' style={{border: props.color || '#000'}}>
            <div className="Content">
                {props.children}
            </div>
            <div className="Footer" style={{backgroundColor: props.color || '#000'}}>
                {props.titulo}
            </div>
        </div>
     );
}
 
export default Card;