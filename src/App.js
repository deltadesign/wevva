import React from 'react';
import './App.css';
import axios from'axios'

// a0a4ed2421e783072dfb96623b63f774

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount(){
    let response = fetch('https://api.openweathermap.org/data/2.5/weather?q=sheffield,uk&appid=a0a4ed2421e783072dfb96623b63f774')
    console.log(response)
    response.then((response)=> {
      response.json().then((jsonresponse)=>{
        this.setState({
          weather: jsonresponse.weather
        })
      })
    })
  }

  render () {
  return (
    <>
    <pre>{JSON.stringify(this.state)}</pre>


    <ul>
      <h2>Todo</h2>
      <li>add api call</li>
      <li>get 5 day forecast</li>
      <li>add some stuff</li>
    </ul>

    </>
  );
  }
}

export default App;
