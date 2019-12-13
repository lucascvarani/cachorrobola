import React from 'react';
import PropTypes from 'prop-types';

import Escrever from './Escrever'
import Pontos from './Pontos'

export default class CachorroBola extends React.Component{

  constructor(){
    super();


    this.state={
      palavra_escrita:"",
      palavra:"",
      palavra_na_tela:"cachorro",
      pontos:0,
      timercount:30,
      jogando:1,
      number : Math.floor(Math.random() * 2)

    };


    this.componentDidMount = () =>{
      var intervalId = setInterval(this.timer,1000);
    

    };



    this.timer = () => {
      if(this.state.jogando == 1){
        this.setState({timercount : this.state.timercount - 1});
        if(this.state.timercount <1){
          this.setState({timercount: 30})
          this.fimDoTempo()
        }
      }
    }


    this.fimDoTempo = () => {
      this.setState({jogando:0})

    }
  }



  funcaobonita = () => {

  }

  render(){



    this.changePalavra = (evento) => {
      this.setState({palavra_escrita: evento.target.value})
    }

    this.jogarDenovo = (evento) =>{
      this.setState({jogando:1})
      this.setState({pontos:0})

    }

    const muda = (evento) => {
      this.setState({palavra_escrita: ''})
      if(this.state.palavra_escrita == this.state.palavra_na_tela){
        this.setState({pontos: this.state.pontos + 1})
        this.setState({number: Math.floor(Math.random() * 2)})
        if(this.state.number == 0){
          this.setState({palavra_na_tela: 'cachorro'})
        }
        else{
          this.setState({palavra_na_tela: 'bola'})
        }
      }
      else{
        if(this.state.pontos !== 0){
          this.setState({pontos : this.state.pontos - 1})
        }

      }
    }

    return(
      <div id = 'central'>
        <h1 id= 'title'>Cachorro ou Bola</h1>


        <div id='tempo'>
          <h1 id='cor_tempo'>Tempo restante: {this.state.timercount}</h1>
        </div>

        <div id = 'pontos'>
          <Pontos pontos2 = {this.props.pontos} pontos={this.state.pontos} nomes={this.props.nomes}/>
        </div>



      {
        this.state.jogando ?
          <div>
            <div id='palavra'>
              <h1 style={{'text-align':'center'}} > {this.state.palavra_na_tela}</h1>
            </div>

            <div id='chat'>
              <Escrever muda={muda} palavra={this.state.palavra_escrita} changePalavra={this.changePalavra}/>
            </div>
        </div>
        :
          <div>
            <div id='pontuacaoFinal'>
            <h1>Pontuação final: {this.state.pontos}</h1>
            </div>

            <div id='jogarDenovo'>
              <input id='bt_jogarDenovo' type='button' value='Jogar denovo' onClick={this.jogarDenovo}/>
            </div>
          </div>
      }
      </div>
    );
    }

}

CachorroBola.propTypes = {

};
