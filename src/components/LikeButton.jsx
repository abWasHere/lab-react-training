import React, { Component } from 'react';

export class LikeButton extends Component {
  state = {
    like: 0,
    color: '',
  };
  handleIncrement = () => {
    let colorsArr = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    let randomIndex = Math.floor(Math.random() * colorsArr.length);
    this.setState({ color: colorsArr[randomIndex], like: this.state.like + 1 });
  };

  render() {
    return (
      <div className="ButtonLike">
        <button
          onClick={this.handleIncrement}
          style={{
            backgroundColor: this.state.color,
          }}
        >
          {this.state.like} Likes
        </button>
      </div>
    );
  }
}

export default LikeButton;
