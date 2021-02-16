import React from 'react';

export default class Bubble extends React.Component {

  render () {
    return (
      <div className = "bubble">
        <h6>{this.props.title}</h6>
        <h6>{this.props.value}</h6>   
      </div>
    )
  }
}