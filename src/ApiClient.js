import axios from 'axios'

export class ApiClient {

  status(response) {
    if (response.status>= 200 && response.status <300) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(new Error(response.text))
    }
  }

  getForecast() {
    return this.getRequest('https://api.openweathermap.org/data/2.5/forecast/daily?q=London&cnt=5&units=metric&appid=a0a4ed2421e783072dfb96623b63f774'); //Mine

    // return this.getRequest("https://api.openweathermap.org/data/2.5/onecall?lat=53.382969&lon=-1.4659&exclude=hourly,minutely&units=metric&appid=06af2c84a95e6a736fd7bab4b3be279d") //Neils from the example app

    // return this.getRequest('https://api.quotable.io/random'); //quotable for testing
  }

  getRequest(url) {
    return axios
      .get(url)
      .then(this.status)
      .catch((error) => {
        console.log(error)
        alert(error)
      })
  }

}