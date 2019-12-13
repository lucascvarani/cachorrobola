import React, {Component} from 'react';


export default class Time extends Component{

  handleClick(event){
    event.preventDefault();
    this.props.marcarGol();
  }

  render(){
    return(
      <button
      onClick={this.handleClick.bind(this)} >

      Gol!

      </button>
    );
  }

}
