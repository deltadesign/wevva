import React from 'react';
import './App.css';
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Sheffield,uk&appid=a0a4ed2421e783072dfb96623b63f774';
// import axios from'axios'


// api id and gh page
// a0a4ed2421e783072dfb96623b63f774
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
