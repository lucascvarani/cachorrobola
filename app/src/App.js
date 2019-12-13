import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CachorroBola from './CachorroBola';
import Formulario from './Formulario';

import PlacarContainer from './PlacarContainer';
import imagem from './face.png'
import CachorroBolaCommander from './CachorroBolaCommander'
import ChangeWeb from './ChangeWeb'




const dados = {
  partida: {
    estadio: "Maracanã/RJ",
    data: "01/06/2016",
    horario: "19h",
  },
  casa: {
    nome: "Vasco",
  },
  visitante: {
    nome: "Flamengo",
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      id:1
    }
  }

  render(){


    return(

      <ChangeWeb />


    )
  }
}
/*<PlacarContainer  {...dados} clima = {'Chuvoso'} tempo = {92} />*/
export default App;
