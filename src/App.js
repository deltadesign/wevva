import React from 'react';
import './App.css';
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Sheffield,uk&appid=0fbd6c6079d3fdfcb32d21d2c735760c';
// import axios from'axios'


// api id and gh page
// 0fbd6c6079d3fdfcb32d21d2c735760c
// https://deltadesign.github.io/wevva/

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      weather: ""

    }
  }

  
  componentDidMount(){
    let response = fetch(url); // fetches data from api
    console.log(response) //console logs response from api as promise

    response.then((response)=> {
      response.json().then((jsonresponse) => {
        this.setState({
          isLoaded: true,
          weather: jsonresponse.weather
        })
      })
    })
  }

  render () {
  return (
    <div className = "app">

      <pre>STATE  = {JSON.stringify(this.state)}</pre>


       {this.state.isLoaded ? "" : "<<<< ▲ LOADING ▲ >>>>"} {/* Loading check */}

      
        <h2>Todo's</h2>
        <br />
        add api call
        <br />
        get 5 day forecast
        <br />
        add some stuff
      
    
    </ div>
  );
  }
}

export default App;
