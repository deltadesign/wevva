import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/navbar';
import Wcard from './components/weathercard';
import { ApiClient } from './ApiClient';
import { Random } from './components/randoload';
import './App.css';

// https://deltadesign.github.io/wevva/

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      weather : []
    }
    this.ApiClient = new ApiClient();
    this.Random = new Random();
  }

  weather(){
    return this.state.weather.slice(1,6).map((item, i)=> (  
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
    <>
      <Navbar bg = "dark" variant = "dark">
        <Navbar.Brand>{this.state.loading ? this.Random.getRandomMessage() : "Wevva"}</Navbar.Brand>
      </Navbar>
    <div className = "app">
      {this.weather()}
    </div>
    </>
  );
  }
}

export default App;
