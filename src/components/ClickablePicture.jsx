import React, { Component } from 'react';

export class ClickablePicture extends Component {
  state = {
    isClicked: false,
  };

  handleClick = () => {
    this.state.isClicked
      ? this.setState({ isClicked: false })
      : this.setState({ isClicked: true });
  };

  render() {
    return (
      <div>
        <img
          onClick={this.handleClick}
          src={this.state.isClicked ? this.props.imgClicked : this.props.img}
          alt="clickable pic"
          className="ClickablePicture"
        />
      </div>
    );
  }
}

export default ClickablePicture;
