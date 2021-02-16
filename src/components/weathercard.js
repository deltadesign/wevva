import React from 'react';
import Card from 'react-bootstrap/card';
import Bubble from './bubbles'

class WCard extends React.Component {
  render () {

  const days = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const day = new Date(parseInt(this.props.datestring)*1000);
  const nameDay = days[day.getDay(day)];
  const month = months[day.getMonth(day)];
  const year = day.getFullYear(day);
  const date = day.getDate(day);
  const wind = `${Math.round(this.props.wind / 1.609, 1)} mph`;
  const min = `${Math.round(this.props.min,1)} °c`;
  const max = `${Math.round(this.props.max,1)} °c`;
  const text = this.props.text;
  const icon = `http://openweathermap.org/img/wn/${this.props.icon}@2x.png`;

  return (

    <Card className = "weathercard" >
      <Card.Header as="h4">{nameDay}</Card.Header>
      <Card.Body>
        <Card.Subtitle>{date} - {month} - {year}</Card.Subtitle>
        <Card.Img className = "image" src = {icon} alt = {text}></Card.Img>   
        <Card.Text>{text}</Card.Text>
        <div className = "bubblebox">
        <Bubble title = "Wind" value = {wind}/>
        <Bubble title = "Min" value = {min}/>
        <Bubble title = "Max" value = {max}/>
        </div>
      </Card.Body>
    </Card>
  )}
}

export default WCard