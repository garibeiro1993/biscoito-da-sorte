import React, { useState } from 'react';
import './estilo.css';

const App = () => {

  const [textoFrase, setTextoFrase] = useState('')

  const frasesBiscoito = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.',
    'O riso é a menor distância entre duas pessoas.',
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'];

  const quebraBiscoito = () => {
    let numeroAleatorio = Math.floor(Math.random() * frasesBiscoito.length);
    setTextoFrase('"' + frasesBiscoito[numeroAleatorio] + '"');
  }

  return (
    <div className="container">
      <img src={require('./assets/biscoito.png')} className="img" alt='biscoito da sorte' />
      <Botao nome="Abrir Biscoito" acaoBtn={quebraBiscoito} />
      <h3 className="textoFrase">{textoFrase}</h3>
    </div>
  )
}

const Botao = (props) => {
  return (
    <div>
      <button onClick={props.acaoBtn}>{props.nome}</button>
    </div>
  )
}

export default App;