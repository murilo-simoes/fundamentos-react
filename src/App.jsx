import React from 'react';
import './index.css'
import './App.css'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/Primeiro'
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf'


const App = (props) => {
    return ( 
        <div className='App'>
        <Card titulo="#05 - Condicional V1">
        <Condicional numero={9}/>
        </Card>
        <Card titulo="#06 - Condicional V2">
        <CondicionalComIf numero={10}></CondicionalComIf>
        </Card>
        <Card titulo="#04 - Repeticao">
            <Repeticao/>
        </Card>
        <Card titulo="#03 - Componente Com Filhos">
        <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Bia</li>
                <li>Carlos</li>
                <li>Ronaldo</li>
            </ul>
        </ComFilhos>
        </Card>
        <Card titulo="#02 - Componente Com Parâmetro">
        <ComParametro titulo="Esse é o Titulo" subtitulo="Esse é o Subtítulo"/>
        </Card>
        <Card titulo=" #01 - Primeiro Componente">
            <Primeiro/>
        </Card>
    </div>
     );
}
 
export default App;