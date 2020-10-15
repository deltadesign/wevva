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
    return this.getRequest("https://api.openweathermap.org/data/2.5/onecall?lat=53.402460&lon=-1.503170&exclude=hourly,minutely&units=metric&appid=0c0115c73dc56a1a10b2e6f717f9c859");
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