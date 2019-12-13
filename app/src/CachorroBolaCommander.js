import React from 'react';
import logo from './logo.svg';
import './App.css';
import CachorroBola from './CachorroBola';

const dadosWebSocket = {
  id:4
}

function componentWillMount(){


}


const nomes = {
  meu_nome:1,
  nome1:"Lucas",
  nome2:'opa',
  nome3:'',
  nome4:'',
  nome5:'',
  nome6:'',
  nome7:'',
  nome8:'',
  nome9:'',
  nome10:''
}



export default class CachorroBolaCommander extends React.Component{



  constructor(){
    super();
    const pontos = {
      id:0,
      nome1:0,
      nome2:0,
      nome3:0,
      nome4:0,
      nome5:0,
      nome6:0,
      nome7:0,
      nome8:0,
      nome9:0,
      nome10:0
    }
    this.state = pontos

    this.componentDidMount = () =>{
      var intervalId = setInterval(this.timer,1);
      var intervalParaMudar = setInterval(this.muda,1000)
    }

    this.timer = () => {

    }




  }

  componentWillReceiveProps(nextProps) {
    console.log('Antiga2', this.props);
    console.log('Nova2', nextProps);
    this.setState({id:nextProps.comando});
    this.changeWebSocket()
  }








  changeWebSocket = () =>{

    switch (this.state.id) {
      case 0:
        break;
      case 1:
        this.setState({nome1 : this.state.nome1 + 1})
        break;
      case 2:
        this.setState({nome2 : this.state.nome2 + 1})
        break;
      case 3:
        this.setState({nome3 : this.state.nome3 + 1})
        break;
      case 4:
        this.setState({nome4 : this.state.nome4 + 1})
        break;
      case 5:
        this.setState({nome5 : this.state.nome5 + 1})
        break;
      case 6:
        this.setState({nome6 : this.state.nome6 + 1})
        break;
      case 7:
        this.setState({nome7 : this.state.nome7 + 1})
        break;
      case 8:
        this.setState({nome8 : this.state.nome8 + 1})
        break;
      case 9:
        this.setState({nome9 : this.state.nome9 + 1})
        break;
      case 10:
        this.setState({nome10 : this.state.nome10 + 1})
        break;
      }
      console.log('aqui')

      console.log(this.state.nome1)

  }


  render(){


    return(

      <CachorroBola nomes={nomes} pontos={this.state}/>

    )
  }
}
