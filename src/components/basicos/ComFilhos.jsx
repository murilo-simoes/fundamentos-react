import React from 'react';

const Filhos = (props) => {
    return ( <div>
        <h2>Os filhos:</h2>
        <div>
            {props.children}
        </div>
    </div> 
    );
}
 
export default Filhos;