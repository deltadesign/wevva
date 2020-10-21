import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Wcard from './components/weathercard'
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
      <Wcard key= {i}
        datestring ={item.dt}
        icon = {item.weather[0].icon}
        text = {item.weather[0].description}
        min = {item.temp.min}
        max = {item.temp.max} 
        wind = {item.wind_speed}
      />
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

      {this.state.loading ? "Loading..." : "Here's your 5 day forecast"}

      {this.weather()}

    </ div>
  );
  }
}

export default App;
