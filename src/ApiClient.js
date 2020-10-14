import axios from 'axios'

export class ApiClient {

  getForecast() {
    return this.getRequest('https://api.openweathermap.org/data/2.5/forecast/daily?q=london&cnt=5&appid=a0a4ed2421e783072dfb96623b63f774');
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