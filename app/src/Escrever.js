import React from 'react';
import PropTypes from 'prop-types';

export default class Escrever extends React.Component{
  constructor(){
    super();
    this.state={
      palavra:"lala"
    };

    this.changePalavra = (evento) => {
      this.setState({palavra: evento.target.value})
    }


};

  componentDidMount() {
    this.inputRef.focus();
  }

  render(){
    this.handleKeyPress = (event) => {
      if(event.key === 'Enter'){
        {this.props.muda()};
      }
    };
    return(

        <div>

        <label id="forms">Escreva a palavra:</label><br/>


        <input
          ref={c => this.inputRef = c}
          className="input_palavra" type='text' name='texto_palavra'
          value={this.props.palavra}
          onChange={this.props.changePalavra}
          onKeyPress={this.handleKeyPress}
          autocomplete="off"
        />


        <input className="bt" type='button' onClick={this.props.muda} value='enviar'/>
        <br/>

        </div>

    );
  }
}

Escrever.propTypes = {

};
