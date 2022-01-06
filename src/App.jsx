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
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/direta/indireta/Super';
import Input from './components/form/Input'
import Contador from './components/contador/Contador';
import Gerador from './components/megasena/Gerador';


const App = (props) => {
    return ( 
        <div className='App'>
        <h1>Fundamentos React</h1>
        <div className='Cards'>

        <Card titulo="#11 - Gerador da Mega-sena" color="#735186">
        <Gerador numeros={8}/>
        </Card>
        <Card titulo="#10 - Contador" color="#293E6A">
        <Contador passo={10} valor={100}></Contador>
        </Card>
        <Card titulo="#09 - Input" color="#9C0F5F">
        <Input></Input>
        </Card>
        <Card titulo="#08 - Comunicação indireta" color="#000">
        <Super></Super>
        </Card>
        <Card titulo="#07 - Comunicação direta" color="#429885">
        <Pai sobrenome="Rodrigues"></Pai>
        </Card>
        <Card titulo="#06 - Condicional V2" color="#FA6900">
        <Condicional numero={9}/>
        </Card>
        <Card titulo="#05 - Condicional V1" color="#E94C6F">
        <CondicionalComIf numero={10}></CondicionalComIf>
        </Card>
        <Card titulo="#04 - Repeticao" color="#008BBa">
            <Repeticao/>
        </Card>
        <Card titulo="#03 - Componente Com Filhos" color="#D96459">
        <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Bia</li>
                <li>Carlos</li>
                <li>Ronaldo</li>
            </ul>
        </ComFilhos>
        </Card>
        <Card titulo="#02 - Componente Com Parâmetro" color="#FF85CB">
        <ComParametro titulo="Esse é o Titulo" subtitulo="Esse é o Subtítulo"/>
        </Card>
        <Card titulo=" #01 - Primeiro Componente" color="#92b06a">
            <Primeiro/>
        </Card>
        </div>
    </div>
     );
}
 
export default App;