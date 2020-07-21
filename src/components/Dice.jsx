import React, { Component } from 'react';

export class Dice extends Component {
  imagesArr = [
    './../../img/dice1.png',
    './../../img/dice2.png',
    './../../img/dice3.png',
    './../../img/dice4.png',
    './../../img/dice5.png',
    './../../img/dice6.png',
  ];

  state = {
    dice: './../../img/dice1.png',
  };

  handleClick = () => {
    this.setState({ dice: './../../img/dice-empty.png' });

    let randomDice = this.imagesArr[
      Math.floor(Math.random() * this.imagesArr.length)
    ];

    setTimeout(() => {
      this.setState({
        dice: randomDice,
      });
    }, 1000);
  };

  render() {
    return (
      <div>
        <img
          onClick={this.handleClick}
          src={this.state.dice}
          alt="clickable dice"
          className="Dice"
        />
      </div>
    );
  }
}

export default Dice;

// An empty picture is displayed ('/img/dice-empty.png')
// 1 second later, a new random picture is displayed (example: '/img/dice6.png').
