import React from 'react';
import logo from './logo.svg';
import './App.css';
import CachorroBola from './CachorroBola';
import CachorroBolaCommander from './CachorroBolaCommander'

export default class ChangeWeb extends React.Component{

  constructor(){
    super();
    this.state={
      id:2
    }
  }

  componentDidMount = () =>{
    var intervalId = setInterval(this.timer,1000);
  }

  timer = () => {
    this.setState({id:this.state.id})
    console.log(this.state.id)
  }





  render(){


    return(
      <CachorroBolaCommander comando={this.state.id}/>

    )
  }
}
