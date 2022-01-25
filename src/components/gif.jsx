import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class Gif extends Component {
  handleClick = (event) => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  };

  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <div className='selected-gif'>
        <img src={src}  onClick={this.handleClick} />

      </div>
    );
  }
}

export default Gif;
