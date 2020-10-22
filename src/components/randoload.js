
export class Random  {

getRandomMessage(){
let randomNumber = Math.ceil(Math.random() * 5);

switch(randomNumber){
  case 1:
    return "STAND BY FOR WEATHER";

  case 2: 
    return "Hang on.. we're on a coffee break";

  case 3: 
    return "It might be quicker to look out of the window..";

  case 4: 
    return "Weather mining is hard work";

  case 5: 
    return "Weathering the storm of API requests"
  
  default:
    return "...Loading.."
}
}
}

