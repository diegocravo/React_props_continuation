import React from 'react';

// import { Container } from './styles';

function ComponenteFilho(props) {

    const handleClick = () => {
        props.setEstadoPai("Clicou")
    }

  return(
      <div>
        <h1>Botao localizado no componente pai {props.estadoFilho}</h1>
        <button onClick={handleClick}>Clique aqui para alterar o componente filho</button>
      </div>
  )
}

export default ComponenteFilho;