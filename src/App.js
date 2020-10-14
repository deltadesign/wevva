import React from 'react';
import './App.css';
import { ApiClient } from './ApiClient'

// https://deltadesign.github.io/wevva/

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.ApiClient = new ApiClient();
  }

  
  componentDidMount(){

    console.log(this.ApiClient.getForecast())

  }

  render () {
  return (
    <div className = "app">

      <pre>{JSON.stringify(this.state)}</pre>
    
    </ div>
  );
  }
}

export default App;
