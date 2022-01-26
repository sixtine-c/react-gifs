import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class Gif extends Component {
  handleClick = (event) => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  };

  render() {
    const src = `https://media4.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <div className='selected-gif'>
        <img src={src} width="480" height="270" onClick={this.handleClick} />

      </div>
    );
  }
}

export default Gif;
