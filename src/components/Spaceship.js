<<<<<<< HEAD

import React from 'react';

class Spaceship extends React.Component {
  render() {
    const { name, speed, hasRockets, colors } = this.props;

    return (
      <div>
        <h1>Spaceship Name: {name}</h1>
        <p>Ship Info:</p>
        <p>Speed: {speed}</p>
        <p>Rockets: {hasRockets ? "Yes" : "No"}</p>
        <ul>
          {colors.map((color, index) => <li key={index}>{color}</li>)}
        </ul>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship;
=======
// Code The Spaceship Component Here


class Spaceship extends React.Component {
  render(){
    const {name, speed, hasRockets, colors}  = this.props
    return (
      <h1>name: ${}</h1>
      )
  }
}


Spaceship.defaultProps = {
  speed:'slow',
  hasRockets: false,
  colors: ['black', 'red']
}
>>>>>>> 8e148dc2cd636fd50ac33347c1b6214d6cbdc426
