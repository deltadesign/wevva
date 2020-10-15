import React from 'react';
import './App.css';
import { ApiClient } from './ApiClient'

// https://deltadesign.github.io/wevva/

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      weather : []
    }
    this.ApiClient = new ApiClient();
  }

  weather(){
    return this.state.weather.map((item, i)=> (
      <div>
      <h2 key= {i} >{item.dt}</h2> 
      </div>
    ))
  }

  getweather () {
    this.ApiClient.getForecast().then((response) => {
      // console.log(response.data.daily)
      this.setState({
        loading: false,
        weather: response.data.daily
      })
    })
  }

  componentDidMount(){
    this.getweather()
  }

  render () {
  return (
    <div className = "app">

      <pre>{JSON.stringify(this.state)}</pre>

      {this.state.loading ? "Loading..." : "Here's your 5 day forecast"}

      {this.weather()}

    </ div>
  );
  }
}

export default App;
