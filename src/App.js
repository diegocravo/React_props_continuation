import React, {useState} from 'react';
import './App.css';
import ComponenteFilho from './components/ComponenteFilho';

function App() {

  const [ estadoPai, setEstadoPai ] = useState('Nâo Cliclou')
  const [ estadoFilho, setEstadoFilho ] = useState('Nâo Clicou')
  const handleClick = () => {
    setEstadoFilho("Clicou")
  }

  return (
    <div className="App">
     <h1>Olá</h1>
     <ComponenteFilho 
      setEstadoPai={setEstadoPai} 
      estadoFilho={estadoFilho}
     />
     <h1>Botao localizado no componente filho {estadoPai}</h1>
     <button onClick={handleClick}>Clique aqui para alterar o componente pai</button>
    </div>
  );
}

export default App;
