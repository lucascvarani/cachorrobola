import React from 'react';
import PropTypes from 'prop-types';

export default class Pontos extends React.Component{
  constructor(){
    super();
    this.state={
      pontos:0
    };

};

  componentWillReceiveProps(nextProps) {
    console.log('Antiga', this.props);
    console.log('Nova', nextProps);
  }

  render(){

    const nomes = this.props.nomes
    const pontos = this.props.pontos
    const pontos2 = this.props.pontos2

    return(

        <div>
        <h1>{nomes.nome1} : {pontos2.nome1}</h1>
        <h1>{nomes.nome2} : {pontos2.nome2}</h1>
        <h1>{nomes.third} : {pontos2.nome3}</h1>
        <h1>{nomes.fourth} : {pontos2.nome4}</h1>
        <h1>{nomes.fifth} : {pontos2.nome5}</h1>
        <h1>{nomes.sixth} : {pontos2.nome6}</h1>
        <h1>{nomes.seventh} : {pontos2.nome7}</h1>
        <h1>{nomes.eighth} : {pontos2.nome8}</h1>
        <h1>{nomes.ninth} : {pontos2.nome9}</h1>
        <h1>{nomes.tenth} : {pontos2.nome10}</h1>
        </div>

    );
  }
}

Pontos.propTypes = {

};
