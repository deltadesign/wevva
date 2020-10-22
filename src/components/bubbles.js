import React from 'react';


class Bubble extends React.Component {

  render () {
    return (

      <div className = "outerbubble">
        <h6>{this.props.title}</h6>
        <h6>{this.props.value}</h6>   
      </div>
    )
  }
}

export default Bubble