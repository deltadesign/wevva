import React from 'react';
import Card from 'react-bootstrap/card';

class WCard extends React.Component {
  render () {

  const days = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"] 
  const day = new Date(parseInt(this.props.datestring)*1000)
  const nameDay = days[day.getDay(day)]
  const month = months[day.getMonth(day)]
  const year = day.getFullYear(day)
  const date = day.getDate(day)


  return (

    <Card>
      <Card.Header>{nameDay} {date} / {month} / {year}</Card.Header>

      <Card.Body>{this.props.text}</Card.Body>

    </Card>
  )}
}

export default WCard